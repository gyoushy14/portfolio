import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import portfolio from '../../data/portfolio'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import SectionTitle from '../ui/SectionTitle'

function ContactChannel({ icon, label, value, href, external = false }) {
  const content = (
    <span className="flex items-center gap-4 rounded-xl p-4 transition-colors duration-300 ease-in-out hover:bg-emerald-500/5">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-transform duration-300 ease-in-out group-hover:scale-110 dark:text-emerald-400">
        <Icon name={icon} size={20} />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
          {label}
        </span>
        <span className="mt-0.5 block text-sm font-medium text-slate-800 dark:text-slate-200">
          {value}
        </span>
      </span>
    </span>
  )

  if (!href) {
    return <div className="group">{content}</div>
  }

  const extraProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <a href={href} {...extraProps} className="group">
      {content}
    </a>
  )
}

const initialState = { name: '', email: '', message: '' }

export default function Contact() {
  const { profile, links, sections, socials } = portfolio
  const [form, setForm] = useState(initialState)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(initialState)
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors duration-300 ease-in-out focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500'

  return (
    <section id="contact" className="bg-slate-50 py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.contact.eyebrow}
          title={sections.contact.title}
          description={sections.contact.description}
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Card className="p-2">
              <ContactChannel
                icon="Mail"
                label="Email"
                value={profile.email}
                href={links.email}
              />
              <ContactChannel
                icon="Phone"
                label="Phone"
                value={profile.phone}
                href={links.tel}
              />
              <ContactChannel
                icon="MapPin"
                label="Location"
                value={profile.location}
              />

              <div className="mt-4 border-t border-slate-200 p-4 dark:border-slate-700">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                  Find me online
                </p>
                <ul className="flex gap-3">
                  {socials.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                      >
                        <Icon name={social.icon} size={20} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <Card className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition-all duration-300 ease-in-out hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 active:scale-[0.99] sm:w-auto"
                >
                  <Send size={16} />
                  Send message
                </button>
              </form>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-300"
                  role="status"
                >
                  Thanks! Your message has been prepared.
                </motion.p>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}