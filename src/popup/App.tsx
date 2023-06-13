import logo from '@/assets/img/logo.png'
import '@/assets/styles/base.scss'
import { APP_TITLE } from '@/config'
import { useCallback, useState } from 'react'
import useSWR from 'swr'
import Browser from 'webextension-polyfill'
import './styles.scss'

const isChrome = /chrome/i.test(navigator.userAgent)

function App() {
  const [question, setQuestion] = useState('')

  const accessTokenQuery = useSWR(
    'accessToken',
    () => Browser.runtime.sendMessage({ type: 'GET_ACCESS_TOKEN' }),
    { shouldRetryOnError: false },
  )
  const hideShortcutsTipQuery = useSWR('hideShortcutsTip', async () => {
    const { hideShortcutsTip } = await Browser.storage.local.get('hideShortcutsTip')
    return !!hideShortcutsTip
  })

  const openOptionsPage = useCallback(() => {
    Browser.runtime.sendMessage({ type: 'OPEN_OPTIONS_PAGE' })
  }, [])

  const openShortcutsPage = useCallback(() => {
    Browser.storage.local.set({ hideShortcutsTip: true })
    Browser.tabs.create({ url: 'chrome://extensions/shortcuts' })
  }, [])

  return (
    <div className="beyondbard--flex beyondbard--flex-col beyondbard--h-full beyondbard--popup">
      <div className="beyondbard--mb-1 beyondbard--flex beyondbard--flex-row beyondbard--items-center beyondbard--px-1">
        <img src={logo} className="beyondbard--w-5 beyondbard--h-5 beyondbard--rounded-sm" />
        <p className="beyondbard--text-sm beyondbard--font-semibold beyondbard--m-0 beyondbard--ml-1">
          {APP_TITLE}
        </p>
      </div>
      {isChrome && !hideShortcutsTipQuery.isLoading && !hideShortcutsTipQuery.data && (
        <p className="beyondbard--m-0 beyondbard--mb-1">
          Tip:{' '}
          <a onClick={openShortcutsPage} className="beyondbard--underline beyondbard--cursor-pointer">
            setup shortcuts
          </a>{' '}
          for faster access.
        </p>
      )}
    </div>
  )
}

export default App
