import { config } from './config'
import type { VersionsOption, EditionAndLanguage, WinFileInfo } from '@/types'

export async function fetchVersionOption(): Promise<VersionsOption> {
  const response = await fetch(`${config.apiHost}/API/LetWin/getOption/version.php`)
  return response.json()
}

export async function fetchEditionAndLanguageOption(
  systemCode: string,
  version: string
): Promise<EditionAndLanguage> {
  const response = await fetch(
    `${config.apiHost}/API/LetWin/getOption/editionAndLanguage.php?SystemCode=${systemCode}&Version=${version}`
  )
  return response.json()
}

export async function fetchWinInfos(
  systemCode: string,
  version: string = '',
  languageCode: string = '',
  edition: string = ''
): Promise<WinFileInfo[]> {
  let url = `${config.apiHost}/API/LetWin/getFileList.php?SystemCode=${systemCode}`
  if (version !== '') {
    url += `&Version=${version}`
  }
  if (languageCode !== '') {
    url += `&LanguageCode=${languageCode}`
  }
  if (edition !== '') {
    url += `&Edition=${edition}`
  }

  const response = await fetch(url)
  return response.json()
}
