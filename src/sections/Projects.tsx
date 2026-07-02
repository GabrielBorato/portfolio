import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FolderGit2, ExternalLink } from 'lucide-react'
import { SectionHeading } from './About'

type ProjectItem = {
  title: string
  description: string
  tech: string[]
  url?: string
}

export function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as ProjectItem[]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="03" title={t('projects.title')} />

        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col p-5 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/80 backdrop-blur-sm hover:border-[color:var(--color-accent)] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <FolderGit2 className="size-6 text-[color:var(--color-accent)]" />
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] transition-colors"
                    aria-label={item.title}
                  >
                    <ExternalLink className="size-4" />
                  </a>
                )}
              </div>

              <h3 className="font-semibold text-base mb-1.5">{item.title}</h3>
              <p className="text-sm text-[color:var(--color-muted)] leading-relaxed flex-1">
                {item.description}
              </p>

              <ul className="flex flex-wrap gap-2 mt-4">
                {item.tech.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-xs px-2 py-0.5 rounded-md border border-[color:var(--color-border)] text-[color:var(--color-muted)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
