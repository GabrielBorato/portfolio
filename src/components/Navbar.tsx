import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Languages, Code2 } from 'lucide-react'

const links = ['about', 'experience', 'skills', 'contact'] as const

export function Navbar() {
  const { t, i18n } = useTranslation()

  const toggleLang = () => {
    const next = i18n.language.startsWith('pt') ? 'en' : 'pt'
    i18n.changeLanguage(next)
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color:var(--color-bg)]/70 border-b border-[color:var(--color-border)]"
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
          <Code2 className="size-5 text-[color:var(--color-accent)]" />
          <span>gabriel.borato</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l}`}
                className="px-3 py-2 text-sm text-[color:var(--color-muted)] hover:text-[color:var(--color-text)] transition-colors rounded-md"
              >
                {t(`nav.${l}`)}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleLang}
          className="p-2 rounded-md text-[color:var(--color-muted)] hover:text-[color:var(--color-text)] hover:bg-[color:var(--color-accent-soft)] transition-colors flex items-center gap-1 text-xs font-mono uppercase"
          aria-label="Toggle language"
        >
          <Languages className="size-4" />
          {i18n.language.startsWith('pt') ? 'pt' : 'en'}
        </button>
      </nav>
    </motion.header>
  )
}
