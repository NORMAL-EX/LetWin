import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { toast } from 'sonner'
import { fetchWinInfos, fetchVersionOption, fetchEditionAndLanguageOption } from '@/services/api'
import type { WinFileInfo, VersionsOption, EditionAndLanguage } from '@/types'
import { ExternalLink, Copy, Download } from 'lucide-react'

async function copyToClip(content: string) {
  await navigator.clipboard.writeText(content)
  toast.success('复制成功')
}

export function Home() {
  const [latestWinInfos, setLatestWinInfos] = useState<WinFileInfo[]>([])

  useEffect(() => {
    async function fetchData() {
      const latestInfos11 = await fetchWinInfos('11')
      const latestInfos10 = await fetchWinInfos('10')
      setLatestWinInfos([...latestInfos11, ...latestInfos10])
    }
    if (latestWinInfos.length === 0) {
      fetchData()
    }
  }, [])

  return (
    <div>
      <div className="text-center">
        <img src="/logo.png" alt="LetWin Logo" className="w-24 h-24 mx-auto mb-4 mt-8" />
        <h1 className="text-5xl font-bold mb-4">LetWin</h1>
        <p className="text-muted-foreground text-lg">从微软服务器获取最新的原版Windows镜像</p>
      </div>

      <Separator className="my-10" />

      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">最新</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {latestWinInfos.map((info, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Windows {info.SystemCode} {info.VerCode} 专业版</CardTitle>
                <p className="text-sm text-muted-foreground">{info.PushTime}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-2 text-center mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground">内部版本</p>
                    <p className="font-semibold text-sm">{info.BuildVer}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">大小</p>
                    <p className="font-semibold text-sm">
                      {(Number(info.Size) / 1024 / 1024 / 1024).toFixed(2)}GB
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">语言</p>
                    <p className="font-semibold text-sm">简体中文</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">架构</p>
                    <p className="font-semibold text-sm">{info.Architecture}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">SHA1</p>
                  <p className="font-mono text-xs break-all">{info.Sha1}</p>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button onClick={() => window.open(info.FilePath, '_self')} className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  立即下载
                </Button>
                <Button onClick={() => copyToClip(info.FilePath)} variant="outline" className="flex-1">
                  <Copy className="mr-2 h-4 w-4" />
                  复制直链
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <AllSystem />

      <Separator className="my-12" />

      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-6">补充</h2>
        <Accordion type="single" collapsible className="text-left">
          <AccordionItem value="item-1">
            <AccordionTrigger>微软官方页面</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <a
                href="https://www.microsoft.com/zh-cn/software-download/windows11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                下载 Windows 11
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a
                href="https://www.microsoft.com/zh-cn/software-download/windows10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                下载 Windows 10
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>第三方原版系统站点</AccordionTrigger>
            <AccordionContent className="space-y-2">
              <a
                href="https://next.itellyou.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                MSDN, 我告诉你
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a
                href="https://uupdump.net/?lang=zh-cn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                UUP dump
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a
                href="https://massgrave.dev/genuine-installation-media"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                MAS
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a
                href="https://hellowindows.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                HelloWindows
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                注：以上站点不保证可用性、安全性、质量，请自行判断。
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

function AllSystem() {
  const [versionsOption, setVersionsOption] = useState<VersionsOption>()
  const [editionAndLanguageOption, setEditionAndLanguageOption] = useState<EditionAndLanguage>()
  const [fileListContent, setFileListContent] = useState<React.ReactElement | null>(null)

  const [systemCode, setSystemCode] = useState('')
  const [version, setVersion] = useState('')
  const [language, setLanguage] = useState('')
  const [edition, setEdition] = useState('')

  useEffect(() => {
    async function fetchData() {
      setVersionsOption(await fetchVersionOption())
    }
    if (!versionsOption) {
      fetchData()
    }
  }, [])

  useEffect(() => {
    if (version !== '') {
      ;(async () => {
        const fetchedData = await fetchEditionAndLanguageOption(systemCode, version)
        setEditionAndLanguageOption(fetchedData)
      })()
    }
  }, [version, systemCode])

  useEffect(() => {
    async function fetchAndSetFileListContent() {
      if (systemCode !== '' && version !== '' && language !== '' && edition !== '') {
        const fetchedInfos = await fetchWinInfos(systemCode, version, language, edition)
        setFileListContent(
          <div className="grid grid-cols-1 gap-4">
            {fetchedInfos.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow max-w-lg mx-auto">
                <CardHeader>
                  <CardTitle>
                    Windows {info.SystemCode} {info.VerCode}{' '}
                    {editionAndLanguageOption?.Edition.find((item) => item.value === edition)?.label || ''}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{info.PushTime}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-2 text-center mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">内部版本</p>
                      <p className="font-semibold text-sm">{info.BuildVer}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">大小</p>
                      <p className="font-semibold text-sm">
                        {(Number(info.Size) / 1024 / 1024 / 1024).toFixed(2)}GB
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">语言</p>
                      <p className="font-semibold text-sm">
                        {editionAndLanguageOption?.Language.find((item) => item.value === language)?.label || ''}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">架构</p>
                      <p className="font-semibold text-sm">{info.Architecture}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">SHA1</p>
                    <p className="font-mono text-xs break-all">{info.Sha1}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button onClick={() => window.open(info.FilePath, '_self')} className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    立即下载
                  </Button>
                  <Button onClick={() => copyToClip(info.FilePath)} variant="outline" className="flex-1">
                    <Copy className="mr-2 h-4 w-4" />
                    复制直链
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )
      } else {
        setFileListContent(null)
      }
    }

    if (systemCode || version || language || edition) {
      fetchAndSetFileListContent()
    }
  }, [systemCode, version, language, edition, editionAndLanguageOption])

  return (
    <div>
      <Separator className="my-14" />
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">所有</h2>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Select value={systemCode} onValueChange={(value) => {
            setSystemCode(value)
            setVersion('')
            setEditionAndLanguageOption({ Language: [], Edition: [] })
            setLanguage('')
            setEdition('')
          }}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择系统" />
            </SelectTrigger>
            <SelectContent>
              {versionsOption?.SystemCodes.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={version}
            onValueChange={(value) => {
              setVersion(value)
              setLanguage('')
              setEdition('')
            }}
            disabled={systemCode === ''}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择版本号" />
            </SelectTrigger>
            <SelectContent>
              {versionsOption?.Versions[systemCode]?.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={language}
            onValueChange={setLanguage}
            disabled={!editionAndLanguageOption?.Language.length || systemCode === ''}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择语言" />
            </SelectTrigger>
            <SelectContent>
              {editionAndLanguageOption?.Language.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={edition}
            onValueChange={setEdition}
            disabled={!editionAndLanguageOption?.Edition.length || systemCode === ''}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择版本" />
            </SelectTrigger>
            <SelectContent>
              {editionAndLanguageOption?.Edition.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-20">
          {fileListContent ? (
            fileListContent
          ) : (
            <p className="text-muted-foreground">请选择上面的筛选选项</p>
          )}
        </div>
      </div>
    </div>
  )
}
