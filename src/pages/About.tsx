import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { config } from '@/services/config'
import { ExternalLink, Code, Globe, HardDrive } from 'lucide-react'

export function About() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <img src="/logo.png" alt="LetWin Logo" className="w-20 h-20 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">关于 LetWin</h1>
        <p className="text-muted-foreground">获取最新的原版 Windows 系统镜像</p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              项目介绍
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              LetWin 是一个简洁、高效的 Windows 系统镜像获取工具，
              通过调用官方 API 从微软服务器直接获取原版 Windows 镜像下载链接。
              支持 Windows 10 和 Windows 11 的各个版本、语言和架构。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              技术栈
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>React 18 - 前端框架</li>
              <li>TypeScript - 类型安全</li>
              <li>Vite - 构建工具</li>
              <li>Tailwind CSS v4 - 样式框架</li>
              <li>Coss UI - 组件库</li>
              <li>Lucide Icons - 图标库</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>作者</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">作者:</span> {config.author}
              </p>
              <a
                href={config.authorBlog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                博客: {config.authorBlog}
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardDrive className="h-5 w-5" />
              友情链接
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <a
                href={config.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                dddffggの博客
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a
                href={config.links.cloudPE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                Cloud-PE
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
              <a
                href={config.links.cloudPan}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                Cloud-PE 云盘
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>使用说明</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>在首页查看最新的 Windows 11 和 Windows 10 专业版镜像</li>
              <li>使用筛选器选择特定的系统版本、语言和版本类型</li>
              <li>点击"立即下载"按钮直接从微软服务器下载</li>
              <li>或点击"复制直链"获取下载链接</li>
              <li>下载后请验证 SHA1 校验值确保文件完整性</li>
            </ol>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground pt-4">
          <p>所有镜像文件均来自微软官方服务器</p>
          <p className="mt-2">本站仅提供查询和下载链接服务</p>
        </div>
      </div>
    </div>
  )
}
