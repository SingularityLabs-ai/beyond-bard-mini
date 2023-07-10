import { getExtensionVersion, AppName } from '@/utils/utils'
import logo from '@/assets/img/logo.png'

function Header() {
  return (
    <>
      <nav className="beyondbard--flex beyondbard--flex-row beyondbard--justify-between beyondbard--items-center beyondbard--mt-5 beyondbard--px-2">
        <div className="beyondbard--flex beyondbard--flex-row beyondbard--items-center beyondbard--gap-2">
          <a href="https://ishandutta2007.github.io/BeyondBard/" target="_blank" rel="noreferrer">
            <img
              src={logo}
              className="beyondbard--w-10 beyondbard--h-10 beyondbard--rounded-lg"
              style={{ 'vertical-align': 'middle' }}
            />
            <span className="font-semibold">
              {AppName} (v
              {getExtensionVersion()})
            </span>{' '}
          </a>
        </div>
        <div className="beyondbard--flex beyondbard--flex-row beyondbard--gap-3">
          <a href="https://discord.gg/jc4xtF58Ve" target="_blank" rel="noreferrer">
            Discord
          </a>
          <a
            href="https://github.com/SingularityLabs-ai/beyond-bard/issues"
            target="_blank"
            rel="noreferrer"
          >
            Feedback
          </a>
          <a href="https://twitter.com/ishandutta2007" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a
            href="https://github.com/SingularityLabs-ai/beyond-bard"
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header
