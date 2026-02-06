import { Link, Outlet, useLocation } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useTheme } from '@/components/ThemeProvider'
import { config } from '@/services/config'

export function Layout() {
  const location = useLocation()
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    } else {
      // If system, toggle to light or dark based on current system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setTheme(systemTheme === 'dark' ? 'light' : 'dark')
    }
  }

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="LetWin" className="w-8 h-8" />
              <span className="text-xl font-bold">LetWin</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-6">
                <Link
                  to="/"
                  className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary font-semibold' : 'text-muted-foreground'
                    }`}
                >
                  首页
                </Link>
                <Link
                  to="/about"
                  className={`hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary font-semibold' : 'text-muted-foreground'
                    }`}
                >
                  关于
                </Link>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="切换深浅色模式"
              >
                {isDark ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-6">
          <Separator className="mb-4" />
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>
              ❤️Made by{' '}
              <a
                href={config.authorBlog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {config.author}
              </a>
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href={config.links.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                dddffggの博客
              </a>
              <a
                href={config.links.cloudPE}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Cloud-PE
              </a>
              <a
                href={config.links.cloudPan}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Cloud-PE 云盘
              </a>
            </div>
            <div className="flex gap-4 justify-center">
              <a
                href={config.icp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {config.icp.number}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
