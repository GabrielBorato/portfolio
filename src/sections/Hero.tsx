import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, MapPin } from 'lucide-react'
import profilePhoto from '../assets/profile.jpg'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,color-mix(in_srgb,var(--color-bg)_55%,transparent),transparent)] pointer-events-none" />

      <div className="relative max-w-3xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <img
            src={profilePhoto}
            alt={t('hero.name')}
            width={144}
            height={144}
            className="size-36 rounded-full object-cover ring-2 ring-[color:var(--color-accent)] ring-offset-2 ring-offset-[color:var(--color-bg)] shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-xs font-mono text-[color:var(--color-muted)]"
        >
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          {t('hero.role')}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[color:var(--color-muted)] font-mono text-sm mb-3"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6"
        >
          {t('hero.name')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-[color:var(--color-muted)] max-w-xl mx-auto mb-3"
        >
          {t('hero.tagline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-1.5 text-sm text-[color:var(--color-muted)] mb-10"
        >
          <MapPin className="size-4" />
          {t('hero.location')}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[color:var(--color-accent)] text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            {t('hero.ctaPrimary')}
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] text-sm font-medium transition-colors"
          >
            {t('hero.ctaSecondary')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
