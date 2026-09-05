import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import portfolio from '../../data/portfolio'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import SectionTitle from '../ui/SectionTitle'

function EducationItem({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative border-s border-slate-200 pl-10 dark:border-slate-700"
    >
      <span
        className="absolute -left-[23px] top-0 inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-800"
        aria-hidden="true"
      >
        <GraduationCap size={14} className="text-emerald-500" />
      </span>
      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
        {item.period}
      </p>
      <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
        {item.degree}
      </h3>
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
        {item.school}
      </p>
    </motion.div>
  )
}

function CertificationCard({ cert }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="h-full"
    >
      <Card className="flex h-full items-center gap-4 p-5 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <Icon name={cert.icon} size={20} />
        </span>
        <div>
          <h4 className="text-sm font-semibold leading-snug text-slate-900 dark:text-white">
            {cert.name}
          </h4>
          <p className="mt-0.5 text-xs font-medium text-slate-400 dark:text-slate-500">
            {cert.issuer}
          </p>
        </div>
      </Card>
    </motion.div>
  )
}

export default function Education() {
  const { education, certifications, sections } = portfolio

  return (
    <section id="education" className="bg-white py-24 dark:bg-slate-800/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={sections.education.eyebrow}
          title={sections.education.title}
          description={sections.education.description}
        />

        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
              Education
            </h3>
            <div className="space-y-10">
              {education.map((item) => (
                <EducationItem key={item.degree} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
              Certifications
            </h3>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certifications.map((cert) => (
                <li key={cert.name} className="h-full">
                  <CertificationCard cert={cert} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}