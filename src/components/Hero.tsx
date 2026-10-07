import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './Icons'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-900 px-3 py-1.5 font-mono text-xs text-fg3">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-emerald-400" aria-hidden="true" />
            Open to entry-level Cloud Engineer roles
          </p>

          <h1
            id="hero-title"
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            Cloud Engineer building and deploying applications on{' '}
            <span className="text-accent">AWS</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg3">
            Cloud Engineering Intern with hands-on experience in AWS, Linux, Docker, Nginx, Git, and
            application deployment.
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm text-fg4">
            <MapPin className="h-4 w-4" aria-hidden="true" /> {profile.name} · {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={profile.resumePath} download="Anand_Tiwary_Resume.pdf" className="btn btn-ghost">
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Anand Tiwary on GitHub"
              className="rounded-lg border border-ink-600 p-2.5 text-fg3 transition-colors hover:border-fg5 hover:text-fg"
            >
              <GithubIcon />
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Anand Tiwary on LinkedIn"
                className="rounded-lg border border-ink-600 p-2.5 text-fg3 transition-colors hover:border-fg5 hover:text-fg"
              >
                <LinkedinIcon />
              </a>
            )}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
