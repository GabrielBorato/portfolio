import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[color:var(--color-border)] py-8 px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[color:var(--color-muted)] font-mono">
        <p>© {year} {profile.name}. {t('footer.rights')}</p>
        <p>{t('footer.built')}</p>
      </div>
    </footer>
  )
}
