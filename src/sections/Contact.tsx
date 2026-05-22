import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { SectionHeading } from './About'
import { profile } from '../data/profile'

// Configure these via Vite env vars (.env.local):
//   VITE_EMAILJS_SERVICE_ID
//   VITE_EMAILJS_TEMPLATE_ID
//   VITE_EMAILJS_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Fallback: open mailto if EmailJS isn't configured yet.
      const form = e.currentTarget
      const data = new FormData(form)
      const subject = encodeURIComponent(`Contact from ${data.get('name')}`)
      const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, { publicKey: PUBLIC_KEY })
      setStatus('success')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionHeading number="04" title={t('contact.title')} />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-[color:var(--color-muted)] mb-8"
        >
          {t('contact.subtitle')}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              name="name"
              type="text"
              placeholder={t('contact.name')}
              className="w-full px-4 py-3 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-sm focus:outline-none focus:border-[color:var(--color-accent)] transition-colors"
            />
            <input
              required
              name="email"
              type="email"
              placeholder={t('contact.email')}
              className="w-full px-4 py-3 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-sm focus:outline-none focus:border-[color:var(--color-accent)] transition-colors"
            />
          </div>
          <textarea
            required
            name="message"
            rows={5}
            placeholder={t('contact.message')}
            className="w-full px-4 py-3 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-sm focus:outline-none focus:border-[color:var(--color-accent)] transition-colors resize-none"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[color:var(--color-accent)] text-white text-sm font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            <Send className="size-4" />
            {status === 'sending' ? t('contact.sending') : t('contact.send')}
          </button>

          {status === 'success' && (
            <p className="text-sm text-emerald-500">{t('contact.success')}</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500">{t('contact.error')}</p>
          )}
        </motion.form>

        <div className="mt-12 pt-8 border-t border-[color:var(--color-border)] text-center">
          <p className="text-xs font-mono uppercase tracking-wider text-[color:var(--color-muted)] mb-4">
            {t('contact.or')}
          </p>
          <div className="flex items-center justify-center gap-2">
            <SocialLink href={profile.github} icon={<FaGithub className="size-4" />} label="GitHub" />
            <SocialLink href={profile.linkedin} icon={<FaLinkedin className="size-4" />} label="LinkedIn" />
            <SocialLink href={`mailto:${profile.email}`} icon={<Mail className="size-4" />} label="Email" />
            <SocialLink href={profile.whatsapp} icon={<FaWhatsapp className="size-4" />} label="WhatsApp" />
            <SocialLink href={profile.instagram} icon={<FaInstagram className="size-4" />} label="Instagram" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2.5 rounded-lg border border-[color:var(--color-border)] text-[color:var(--color-muted)] hover:text-[color:var(--color-accent)] hover:border-[color:var(--color-accent)] transition-colors"
    >
      {icon}
    </a>
  )
}
