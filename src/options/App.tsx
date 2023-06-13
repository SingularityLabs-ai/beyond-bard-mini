import {
  CssBaseline,
  GeistProvider,
  Radio,
  Select,
  Text,
  Toggle,
  useToasts,
  Divider,
} from '@geist-ui/core'
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks'
import '@/assets/styles/base.scss'
import {
  getUserConfig,
  Language,
  Theme,
  TriggerMode,
  TRIGGER_MODE_TEXT,
  updateUserConfig,
  DEFAULT_PAGE_SUMMARY_BLACKLIST,
} from '@/config'
import { PageSummaryProps } from './components/PageSummary'
import ProviderSelect from './ProviderSelect'
import { config as supportSites } from '@/content-script/search-engine-configs'
import { isIOS } from '@/utils/utils'
import Header from './components/Header'
import CustomizePrompt from './components/CustomizePrompt'
import PageSummaryComponent from './components/PageSummary'
import EnableBeyondBard from './components/EnableBeyondBard'
import { detectSystemColorScheme } from '@/utils/utils'
import {
  videoSummaryPromptHightligt,
  searchPromptHighlight,
  pageSummaryPromptHighlight,
  commentSummaryPromptHightligt,
} from '@/utils/prompt'

import './styles.scss'

function OptionsPage(
  props: {
    theme: Theme
    onThemeChange: (theme: Theme) => void
  } & PageSummaryProps,
) {
  const {
    setPageSummaryEnable,
    pageSummaryEnable,
    pageSummaryWhitelist,
    pageSummaryBlacklist,
    setPageSummaryWhitelist,
    setPageSummaryBlacklist,
  } = props
  const [triggerMode, setTriggerMode] = useState<TriggerMode>(TriggerMode.Always)
  const [language, setLanguage] = useState<Language>(Language.Auto)
  const { setToast } = useToasts()
  const [allSites, setAllSites] = useState<string[]>([])
  const [enableSites, setEnableSites] = useState<string[]>([])
  const [prompt, setPrompt] = useState<string>('')
  const [promptSearch, setPromptSearch] = useState<string>('')
  const [promptPage, setPromptPage] = useState<string>('')
  const [promptComment, setPromptComment] = useState<string>('')

  const onTriggerModeChange = useCallback(
    (mode: TriggerMode) => {
      setTriggerMode(mode)
      updateUserConfig({ triggerMode: mode })
      setToast({ text: 'Changes saved', type: 'success' })
    },
    [setToast],
  )

  const onThemeChange = useCallback(
    (theme: Theme) => {
      updateUserConfig({ theme })
      props.onThemeChange(theme)
      setToast({ text: 'Changes saved', type: 'success' })
    },
    [props, setToast],
  )

  const onLanguageChange = useCallback(
    (language: Language) => {
      updateUserConfig({ language })
      setToast({ text: 'Changes saved', type: 'success' })
    },
    [setToast],
  )

  const getSplitString = (str: string) => {
    if (str && str.includes('Chinese')) {
      return `Chinese (${str.split('Chinese')[1] || ''})`
    }

    return str ?? ''
  }

  useEffect(() => {
    getUserConfig().then((config) => {
      setTriggerMode(config.triggerMode)
      setLanguage(config.language)

      setPrompt(config.prompt ? config.prompt : videoSummaryPromptHightligt)
      setPromptSearch(config.promptSearch ? config.promptSearch : searchPromptHighlight)
      setPromptPage(config.promptPage ? config.promptPage : pageSummaryPromptHighlight)
      setPromptComment(config.promptComment ? config.promptComment : commentSummaryPromptHightligt)

      const sites =
        Object.values(supportSites).map((site) => {
          return site.siteValue
        }) || []

      setAllSites(sites)
      const enableSites = config.enableSites
      setEnableSites(enableSites ? enableSites : sites)
    })
  }, [])

  return (
    <div className="beyondbard--container beyondbard--mx-auto">
      <Header />

      <main className="beyondbard--w-[900px] beyondbard--mx-auto beyondbard--mt-14 beyondbard--options">
        <Text h2>Options</Text>

        {/* Trigger Mode */}
        {!isIOS && (
          <>
            <Text h3 className="beyondbard--mt-5">
              Trigger Mode
            </Text>
            <Radio.Group
              value={triggerMode}
              onChange={(val) => onTriggerModeChange(val as TriggerMode)}
            >
              {Object.entries(TRIGGER_MODE_TEXT).map(([value, texts]) => {
                return (
                  <Radio key={value} value={value}>
                    {texts.title}
                    <Radio.Description>{texts.desc}</Radio.Description>
                  </Radio>
                )
              })}
            </Radio.Group>
          </>
        )}

        {/* Theme */}
        <Text h3 className="beyondbard--mt-5">
          Theme
        </Text>
        <Radio.Group value={props.theme} onChange={(val) => onThemeChange(val as Theme)} useRow>
          {Object.entries(Theme).map(([k, v]) => {
            return (
              <Radio key={v} value={v}>
                {k}
              </Radio>
            )
          })}
        </Radio.Group>

        {/* Language */}
        <Text h3 className="beyondbard--mt-5 beyondbard--mb-0">
          Language
        </Text>
        <Text className="beyondbard--my-1">
          The language used in Bard response. <span className="beyondbard--italic">Auto</span> is
          recommended.
        </Text>
        <Select
          value={language}
          placeholder="Choose one"
          onChange={(val) => onLanguageChange(val as Language)}
        >
          {Object.entries(Language).map(([k, v]) => (
            <Select.Option key={k} value={v}>
              {getSplitString(String(k))}
            </Select.Option>
          ))}
        </Select>

        <CustomizePrompt
          prompt={prompt}
          promptSearch={promptSearch}
          setPrompt={setPrompt}
          setPromptSearch={setPromptSearch}
          promptPage={promptPage}
          setPromptPage={setPromptPage}
          promptComment={promptComment}
          setPromptComment={setPromptComment}
        />

        {/* Enable/Disable BeyondBard */}
        <EnableBeyondBard
          enableSites={enableSites}
          setEnableSites={setEnableSites}
          allSites={allSites}
          supportSites={supportSites}
        />

        {/* Misc */}
        {/* <Text h3 className="beyondbard--mt-8">
          Misc
        </Text>
        <div className="beyondbard--flex beyondbard--flex-row beyondbard--items-center beyondbard--gap-4">
          <Toggle initialChecked disabled />
          <Text b margin={0}>
            Auto delete conversations generated by search
          </Text>
        </div> */}

        {/* <Divider /> */}

        {/* Page Summary */}
        <PageSummaryComponent
          pageSummaryEnable={pageSummaryEnable}
          setPageSummaryEnable={setPageSummaryEnable}
          pageSummaryWhitelist={pageSummaryWhitelist}
          pageSummaryBlacklist={pageSummaryBlacklist}
          setPageSummaryWhitelist={setPageSummaryWhitelist}
          setPageSummaryBlacklist={setPageSummaryBlacklist}
        />
      </main>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(Theme.Auto)
  const [pageSummaryEnable, setPageSummaryEnable] = useState(true)
  const [pageSummaryWhitelist, setPageSummaryWhitelist] = useState<string>('')
  const [pageSummaryBlacklist, setPageSummaryBlacklist] = useState<string>('')

  const themeType = useMemo(() => {
    if (theme === Theme.Auto) {
      return detectSystemColorScheme()
    }
    return theme
  }, [theme])

  useEffect(() => {
    getUserConfig().then((config) => {
      setTheme(config.theme)
      setPageSummaryEnable(config.pageSummaryEnable)
      setPageSummaryWhitelist(config.pageSummaryWhitelist)
      setPageSummaryBlacklist(
        config.pageSummaryBlacklist ? config.pageSummaryBlacklist : DEFAULT_PAGE_SUMMARY_BLACKLIST,
      )
    })
  }, [])

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <OptionsPage
        theme={theme}
        onThemeChange={setTheme}
        setPageSummaryEnable={setPageSummaryEnable}
        pageSummaryEnable={pageSummaryEnable}
        pageSummaryWhitelist={pageSummaryWhitelist}
        pageSummaryBlacklist={pageSummaryBlacklist}
        setPageSummaryWhitelist={setPageSummaryWhitelist}
        setPageSummaryBlacklist={setPageSummaryBlacklist}
      />
    </GeistProvider>
  )
}

export default App
