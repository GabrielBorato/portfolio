import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { stats } from '../data/profile'

export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="01" title={t('about.title')} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-[color:var(--color-muted)] leading-relaxed"
        >
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-4 sm:p-5 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[color:var(--color-accent)] font-mono">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-[color:var(--color-muted)] mt-1">
                {t(`about.stats.${s.key}`)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-baseline gap-3 mb-8"
    >
      <span className="font-mono text-sm text-[color:var(--color-accent)]">{number}.</span>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-[color:var(--color-border)] ml-2" />
    </motion.div>
  )
}
