import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from './About'

type ExperienceItem = {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

export function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true }) as ExperienceItem[]

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="02" title={t('experience.title')} />

        <ol className="relative border-l border-[color:var(--color-border)] ml-2 space-y-10">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="pl-6 relative"
            >
              <span className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-[color:var(--color-accent)] ring-4 ring-[color:var(--color-bg)]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-semibold text-base">
                  {item.role}{' '}
                  <span className="text-[color:var(--color-accent)]">@ {item.company}</span>
                </h3>
                <span className="font-mono text-xs text-[color:var(--color-muted)] whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <p className="text-xs text-[color:var(--color-muted)] mb-3">{item.location}</p>

              <ul className="space-y-1.5 text-sm text-[color:var(--color-muted)]">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-[color:var(--color-accent)] mt-1.5 size-1 rounded-full bg-current shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
