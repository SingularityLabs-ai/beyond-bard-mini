import { useState } from 'preact/hooks'
import { Note, Description, Button, Divider } from '@geist-ui/core'
import { XCircleFillIcon } from '@primer/octicons-react'
import Browser from 'webextension-polyfill'
import { APP_TITLE } from '@/config'

interface Props {
  isLogin: boolean
}

function ChatGPTTip(props: Props) {
  const isLogin = props?.isLogin
  const [showTip, setShowTip] = useState(true)

  const onClose = () => {
    setShowTip(false)
  }

  const onBack = () => {
    Browser.runtime.sendMessage({
      type: 'GO_BACK',
    })
  }

  return (
    <>
      {showTip && (
        <>
          <Note type="success" label={false}>
            <Description
              title={`${APP_TITLE}  tips:`}
              content={
                <>
                  {isLogin ? (
                    <>
                      <Divider />
                      I am Ready! <br />
                      Keep this tab to make Bard more stable.
                      <Divider />
                      <Button auto type="success" onClick={onBack} scale={0.5}>
                        Back
                      </Button>
                    </>
                  ) : (
                    <>
                      <Divider />
                      Login to the Bard web application to use the BeyondBard Summary.
                    </>
                  )}
                </>
              }
            />
          </Note>

          <Button
            className="beyondbard--chatgpt--tips--close"
            iconRight={<XCircleFillIcon />}
            auto
            onClick={onClose}
          />
        </>
      )}
    </>
  )
}

export default ChatGPTTip
