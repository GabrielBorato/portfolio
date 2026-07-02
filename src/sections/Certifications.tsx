import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Award, Loader } from 'lucide-react'
import { SectionHeading } from './About'

type CertItem = {
  title: string
  issuer: string
  inProgress?: boolean
}

export function Certifications() {
  const { t } = useTranslation()
  const items = t('certifications.items', { returnObjects: true }) as CertItem[]

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="05" title={t('certifications.title')} />

        <div className="grid sm:grid-cols-2 gap-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="flex items-start gap-3 p-4 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/80 backdrop-blur-sm hover:border-[color:var(--color-accent)] transition-colors"
            >
              <Award className="size-5 text-[color:var(--color-accent)] shrink-0 mt-0.5" />
              <div className="min-w-0">
                <h3 className="font-medium text-sm leading-snug">{item.title}</h3>
                <p className="text-xs text-[color:var(--color-muted)] mt-0.5">{item.issuer}</p>
                {item.inProgress && (
                  <span className="inline-flex items-center gap-1 mt-2 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[color:var(--color-accent-soft)] text-[color:var(--color-accent)]">
                    <Loader className="size-3 animate-spin" />
                    {t('certifications.inProgress')}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
