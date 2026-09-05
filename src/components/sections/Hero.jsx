import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import portfolio from '../../data/portfolio'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

const FADE = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
}

function useTyping(words, typeMs = 80, deleteMs = 45, holdMs = 1400) {
  const [state, setState] = useState({ index: 0, sub: 0, deleting: false })
  const { index, sub, deleting } = state
  const word = words[index % words.length]

  useEffect(() => {
    let delay = typeMs
    let action = null

    if (!deleting && sub === word.length) {
      delay = holdMs
      action = () => setState((s) => ({ ...s, deleting: true }))
    } else if (deleting && sub === 0) {
      delay = deleteMs
      action = () =>
        setState((s) => ({
          deleting: false,
          sub: 0,
          index: (s.index + 1) % words.length,
        }))
    } else {
      delay = deleting ? deleteMs : typeMs
      action = () => setState((s) => ({ ...s, sub: s.sub + (s.deleting ? -1 : 1) }))
    }

    const t = setTimeout(() => {
      if (action) action()
    }, delay)
    return () => clearTimeout(t)
  }, [words, index, sub, deleting, word.length, typeMs, deleteMs, holdMs])

  return { text: word.substring(0, sub) }
}

export default function Hero() {
  const { profile, hero } = portfolio
  const typing = useTyping(profile.roles)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 dark:bg-slate-900"
    >
      <div className="bg-grid absolute inset-0" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.6,
        }}
        className="pointer-events-none absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-teal-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-4 py-28 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div variants={FADE} className="mb-6 inline-flex">
            <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {hero.availabilityBadge}
            </span>
          </motion.div>

          <motion.h1
            variants={FADE}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            {profile.name.split(' ')[0]}{' '}
            <span className="text-gradient">{profile.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          <motion.p
            variants={FADE}
            className="mt-4 h-8 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-slate-200"
            aria-label={profile.roles.join(', ')}
          >
            <span className="inline-flex">
              {typing.text}
              <span className="w-[2px] animate-pulse bg-emerald-500" aria-hidden="true">
                &nbsp;
              </span>
            </span>
          </motion.p>

          <motion.p
            variants={FADE}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={FADE} className="mt-9 flex flex-wrap gap-3">
            {hero.cta.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.variant}
                external={cta.external}
                download={cta.download}
              >
                {cta.icon && <Icon name={cta.icon} size={18} />}
                {cta.label}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="hidden lg:block"
        >
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-2xl shadow-slate-900/20 dark:border-slate-700">
            <div className="flex items-center gap-2 border-b border-slate-700/60 bg-slate-800 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" aria-hidden="true" />
              <span className="ml-3 inline-flex items-center gap-1.5 text-xs text-slate-400">
                <Terminal size={13} />
                {hero.terminal.title}
              </span>
            </div>
            <div className="space-y-1.5 p-5 font-mono text-sm">
              {hero.terminal.lines.map((line, i) => (
                <p
                  key={i}
                  className={
                    line.type === 'comment'
                      ? 'text-slate-500'
                      : line.type === 'command'
                        ? 'text-slate-100'
                        : 'text-emerald-400'
                  }
                >
                  {line.type === 'command' && <span className="text-emerald-500">❯ </span>}
                  {line.text}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}