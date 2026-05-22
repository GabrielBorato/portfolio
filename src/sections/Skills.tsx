import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { skillGroups } from '../data/profile'
import { SectionHeading } from './About'

export function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="03" title={t('skills.title')} />

        <div className="grid sm:grid-cols-2 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-5 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/80 backdrop-blur-sm hover:border-[color:var(--color-accent)] transition-colors"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)] mb-4">
                {t(`skills.groups.${group.key}`)}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((item) => {
                  const src = 'url' in item && item.url
                    ? item.url
                    : `https://skillicons.dev/icons?i=${item.icon}&theme=dark`
                  return (
                    <li key={item.icon} className="group relative">
                      <img
                        src={src}
                        alt={item.name}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="size-10 transition-transform group-hover:-translate-y-0.5 group-hover:drop-shadow-[0_0_8px_var(--color-accent)]"
                      />
                      <span
                        role="tooltip"
                        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2 py-1 text-xs font-mono text-[color:var(--color-text)] opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100 shadow-lg shadow-black/30"
                      >
                        {item.name}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
