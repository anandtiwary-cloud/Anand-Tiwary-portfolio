import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="experience" title="Internship experience" id="exp-title" />

        <Reveal>
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute bottom-0 left-[11px] top-2 w-px bg-ink-600 sm:left-[15px]" aria-hidden="true" />
            <span
              className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-accent/50 bg-ink-950 sm:h-8 sm:w-8"
              aria-hidden="true"
            >
              <Briefcase className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
            </span>

            <article className="card p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-fg">{experience.role}</h3>
                  <p className="text-fg3">{experience.company}</p>
                </div>
                <p className="font-mono text-sm text-fg4">{experience.period}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {experience.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-fg2 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky2" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-ink-700 pt-6">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-fg4">
                  Hands-on with
                </p>
                <ul className="flex flex-wrap gap-2">
                  {experience.tech.map((t) => (
                    <li key={t} className="chip chip-accent">
                      {t}
                    </li>
                  ))}
                </ul>

                <p className="mb-3 mt-5 font-mono text-xs uppercase tracking-[0.2em] text-fg4">
                  Familiar with
                </p>
                <ul className="flex flex-wrap gap-2">
                  {experience.exposure.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
