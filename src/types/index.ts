export interface SystemCode {
  label: string
  value: string
}

export interface Version {
  label: string
  value: string
}

export interface VersionsOption {
  SystemCodes: SystemCode[]
  Versions: {
    [key: string]: Version[]
  }
}

export interface LanguageOption {
  value: string
  label: string
}

export interface EditionOption {
  value: string
  label: string
}

export interface EditionAndLanguage {
  Language: LanguageOption[]
  Edition: EditionOption[]
}

export interface WinFileInfo {
  FileName: string
  LanguageCode: string
  Language: string
  Edition: string
  Architecture: string
  Size: string
  Sha1: string
  FilePath: string
  PushTime: string
  BuildVer: string
  VerCode: string
  SystemCode: string
}
