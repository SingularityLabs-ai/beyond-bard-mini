import Browser from 'webextension-polyfill'
import { Theme, BASE_URL } from '@/config'

export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

export const isFirefox = navigator.userAgent.indexOf('Firefox') != -1

export const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

export const AppName = 'Beyond Bard - AI  chat for any website'

export function detectSystemColorScheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.Dark
  }
  return Theme.Light
}

export function getExtensionVersion() {
  return Browser.runtime.getManifest().version
}

export const changeToast: { type: 'success'; text: string } = {
  text: 'Changes saved',
  type: 'success',
}

export function tabSendMsg(tab) {
  const { id, url } = tab
  if (url.includes(`${BASE_URL}/chat`)) {
    Browser.tabs
      .sendMessage(id, { type: 'CHATGPT_TAB_CURRENT', data: { isLogin: true } })
      .catch(() => {})
  } else {
    Browser.tabs
      .sendMessage(id, { type: 'CHATGPT_TAB_CURRENT', data: { isLogin: false } })
      .catch(() => {})
  }
}

export function extract_followups_section(answer_text:string) {
  const splits = answer_text.split(/\**#{3}|#{2}|#{1}|#{0}\**\ *\**[fF]ollow-up [qQ]uestions:*\**/);
  let followup_section = "";
  if (splits.length >= 2) {
    followup_section = splits[splits.length - 1]
  }
  return followup_section;
}

  // let splits = answer_text.split("### Follow-up Questions:")
  // if (splits.length == 1) splits = answer_text.split("### Follow-up Questions")
  // if (splits.length == 1) splits = answer_text.split("## Follow-up Questions:")
  // if (splits.length == 1) splits = answer_text.split("## Follow-up Questions")
  // if (splits.length == 1) splits = answer_text.split("# Follow-up Questions:")
  // if (splits.length == 1) splits = answer_text.split("# Follow-up Questions")

  // if (splits.length == 1) splits = answer_text.split("***Follow-up Questions:***")
  // if (splits.length == 1) splits = answer_text.split("***Follow-up Questions***")
  // if (splits.length == 1) splits = answer_text.split("**Follow-up Questions:**")
  // if (splits.length == 1) splits = answer_text.split("**Follow-up Questions**")
  // if (splits.length == 1) splits = answer_text.split("*Follow-up Questions:*")
  // if (splits.length == 1) splits = answer_text.split("*Follow-up Questions*")

  // if (splits.length == 1) splits = answer_text.split("### Follow-up questions")
  // if (splits.length == 1) splits = answer_text.split("## Follow-up questions:")
  // if (splits.length == 1) splits = answer_text.split("## Follow-up questions")
  // if (splits.length == 1) splits = answer_text.split("# Follow-up questions:")
  // if (splits.length == 1) splits = answer_text.split("# Follow-up questions")

  // if (splits.length == 1) splits = answer_text.split("***Follow-up questions:***")
  // if (splits.length == 1) splits = answer_text.split("***Follow-up questions***")
  // if (splits.length == 1) splits = answer_text.split("**Follow-up questions:**")
  // if (splits.length == 1) splits = answer_text.split("**Follow-up questions**")
  // if (splits.length == 1) splits = answer_text.split("*Follow-up questions:*")
  // if (splits.length == 1) splits = answer_text.split("*Follow-up questions*")


export function extract_followups(followup_section:string) {
  let final_followups = [];
  if (followup_section.length > 0) {
    let rawsplits = followup_section.split("\n");
    for(var i = 0; i < rawsplits.length; i++) {
      let regnumexp = /[0-9]..*/gi;
      let regbulletexp = /[*+-] .*/gi;
      if (rawsplits[i].match(regnumexp)) {
        final_followups.push(rawsplits[i].slice(2).trim());
      } else if (rawsplits[i].match(regbulletexp)) {
        let finesplits = rawsplits[i].split("* ");
        if (finesplits[finesplits.length-1].length > 4 && finesplits[finesplits.length-1].trim()[finesplits[finesplits.length-1].trim().length-1]=="?")
          final_followups.push(finesplits[finesplits.length-1].trim());
      }
    }
  }
  return final_followups;
}