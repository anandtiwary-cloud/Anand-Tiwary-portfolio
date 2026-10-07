import {
  Cloud,
  Terminal,
  Container,
  Layers,
  GitBranch,
  Database,
  type LucideIcon,
} from 'lucide-react'
import { skillGroups, type SkillGroup } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons: Record<SkillGroup['icon'], LucideIcon> = {
  cloud: Cloud,
  terminal: Terminal,
  container: Container,
  infra: Layers,
  deploy: GitBranch,
  database: Database,
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section border-y border-ink-800 bg-ink-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="cloud stack"
          title="Skills & tools"
          id="skills-title"
          description="Tools I've used while deploying and troubleshooting applications."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon]
            return (
              <Reveal key={g.title} delay={(i % 3) * 80}>
                <div className="card group h-full p-6 transition-colors duration-200 hover:border-ink-600">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600 bg-ink-800 transition-transform duration-200 group-hover:-translate-y-0.5">
                      <Icon className="h-5 w-5 text-sky2" aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-fg">{g.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="chip transition-colors duration-200 hover:border-sky2/50 hover:text-fg"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  {g.note && <p className="mt-4 font-mono text-[11px] text-fg4">{g.note}</p>}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
