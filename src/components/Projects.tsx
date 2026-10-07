import { useState } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { profile, projects, type Project } from '../data/portfolio'
import { GithubIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `${project.id}-details`
  // Falls back to the GitHub repositories page until a real repo URL is added in data/portfolio.ts
  const repoHref = project.repo || `${profile.github}?tab=repositories`

  return (
    <Reveal delay={index * 100}>
      <article className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink-600 sm:p-8">
        <p className="font-mono text-xs text-accent">0{index + 1}</p>
        <h3 className="mt-2 text-xl font-semibold leading-snug text-fg sm:text-2xl">{project.title}</h3>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <p className="mt-6 leading-relaxed text-fg2">{project.overview}</p>

        <div
          id={panelId}
          hidden={!open}
          className="mt-4 border-t border-ink-700 pt-4"
        >
          <ul className="space-y-3">
            {project.details.map((d) => (
              <li key={d} className="flex gap-3 text-sm leading-relaxed text-fg2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky2" aria-hidden="true" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <a href={repoHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <GithubIcon className="h-4 w-4" /> View on GitHub
            <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="btn btn-ghost"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Hide Details' : 'View Details'}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section border-y border-ink-800 bg-ink-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="projects"
          title="Deployment projects"
          id="projects-title"
          description="Hands-on projects where I deployed and containerized applications on AWS EC2."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
