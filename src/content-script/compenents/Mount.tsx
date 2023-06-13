import { render } from 'preact'
import { getUserConfig, Theme } from '@/config'
import { config } from '@/content-script/search-engine-configs'
import ChatGPTContainer from '@/content-script/compenents/ChatGPTContainer'
import { detectSystemColorScheme } from '@/utils/utils'
import { getPossibleElementByQuerySelector, waitForElm } from '@/content-script/utils'
import {
  siteConfig as sietConfigFn,
  siteName as siteNameFn,
  hostname,
} from '@/content-script/utils'

interface MountProps {
  question: string | null
  transcript?: unknown
  langOptionsWithLink?: unknown
}

export default async function mount(props: MountProps) {
  const siteConfig = sietConfigFn()
  const siteName = siteNameFn()

  const { question, transcript, langOptionsWithLink } = props
  if (!siteConfig) {
    return
  }
  const userConfig = await getUserConfig()

  const sites = Object.values(config).map((site) => {
    return site.siteValue
  })

  const enableSites = userConfig.enableSites ? userConfig.enableSites : sites
  const regexList = []
  Object.values(enableSites).map((v) => {
    const item = config[v]

    if (item.regex) {
      regexList.push(item.regex)
    }
  })

  if (regexList.length <= 0) {
    return
  }
  const sitesRegex = new RegExp(regexList.join('|'))

  if (!sitesRegex.test(hostname)) {
    return
  }

  if (document.querySelector('section.beyondbard--container')) {
    document.querySelector('section.beyondbard--container')?.remove()
  }

  const container = document.createElement('section')
  container.className = 'b_beyondbard'
  container.classList.add('beyondbard--container')
  container.id = 'beyondbard--container'

  let theme: Theme
  if (userConfig.theme === Theme.Auto) {
    theme = detectSystemColorScheme()
  } else {
    theme = userConfig.theme
  }
  if (theme === Theme.Dark) {
    container.classList.add('gpt--dark')
  } else {
    container.classList.add('gpt--light')
  }

  switch (siteName) {
    case 'pubmed': {
      container.classList.add('beyondbard--chatgpt--pubmed')
      const appendContainer = getPossibleElementByQuerySelector(
        siteConfig.extabarContainerQuery || [],
      )
      appendContainer?.prepend(container)
      break
    }
    case 'newspicks': {
      container.classList.add('beyondbard--chatgpt--newspicks')
      const appendContainer = getPossibleElementByQuerySelector(
        siteConfig.extabarContainerQuery || [],
      )
      appendContainer?.prepend(container)
      break
    }

    case 'yahooJpNews': {
      container.classList.add('beyondbard--chatgpt--yahoonews')

      const appendContainer = getPossibleElementByQuerySelector(
        siteConfig.extabarContainerQuery || [],
      )
      appendContainer?.prepend(container)
      break
    }
    case 'nikkei': {
      container.classList.add('beyondbard--chatgpt--nikkei')
      const appendContainer = getPossibleElementByQuerySelector(
        siteConfig.extabarContainerQuery || [],
      )
      appendContainer?.prepend(container)
      break
    }
    case 'github': {
      container.classList.add('beyondbard--chatgpt--github')
      const appendContainer = getPossibleElementByQuerySelector(
        siteConfig.extabarContainerQuery || [],
      )
      appendContainer?.prepend(container)
      break
    }

    case 'googlePatents': {
      const extabarContainerQuery =
        siteConfig.extabarContainerQuery && siteConfig.extabarContainerQuery[0]

      if (!extabarContainerQuery) {
        return
      }

      waitForElm(extabarContainerQuery).then(() => {
        container.classList.add('beyondbard--chatgpt--googlePatents')
        const appendContainer = getPossibleElementByQuerySelector(
          siteConfig.extabarContainerQuery || [],
        )
        appendContainer?.prepend(container)
      })

      break
    }
    case 'youtube': {
      container.classList.add('beyondbard--chatgpt--youtube')
      waitForElm('#secondary.style-scope.ytd-watch-flexy').then(() => {
        document.querySelector('#secondary.style-scope.ytd-watch-flexy')?.prepend(container)
      })
      break
    }
    case 'bilibili': {
      container.classList.add('beyondbard--chatgpt--bilibili')

      waitForElm(siteConfig.extabarContainerQuery?.[0]).then(() => {
        container.classList.add('beyondbard--chatgpt--bilibili')
        const appendContainer = getPossibleElementByQuerySelector(
          siteConfig.extabarContainerQuery || [],
        )
        appendContainer?.insertAdjacentElement('beforebegin', container)
      })
      break
    }
    default: {
      if (siteName === 'bing') {
        if (!/bing.com\/search\?/g.test(location.href)) {
          return
        }
        container.classList.add('beyondbard--chatgpt--bing')
      }

      const siderbarContainer = getPossibleElementByQuerySelector(siteConfig.sidebarContainerQuery)

      if (siderbarContainer) {
        siderbarContainer.prepend(container)
      } else {
        if (
          siteConfig.extabarContainerQuery &&
          document.querySelector('#center_col')?.nextSibling
        ) {
          container.classList.add('beyondbard--full-container')
          const appendContainer = getPossibleElementByQuerySelector(
            siteConfig.extabarContainerQuery,
          )
          if (appendContainer) {
            appendContainer.appendChild(container)
            appendContainer.appendChild(container)
          }
        } else {
          container.classList.add('sidebar--free')
          const appendContainer = getPossibleElementByQuerySelector(siteConfig.appendContainerQuery)
          if (appendContainer) {
            appendContainer.appendChild(container)
          }
        }
      }
    }
  }

  render(
    <ChatGPTContainer
      question={question}
      transcript={transcript}
      siteConfig={siteConfig}
      langOptionsWithLink={langOptionsWithLink}
      triggerMode={userConfig.triggerMode || 'always'}
    />,
    container,
  )
}
