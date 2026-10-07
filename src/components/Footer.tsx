import { Mail } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const link =
    'inline-flex items-center gap-2 text-sm text-fg3 transition-colors hover:text-fg'
  return (
    <footer className="border-t border-ink-800 py-10">
      <div className="container-x flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold tracking-wider text-fg">{profile.name}</p>
          <p className="mt-1 text-sm text-fg4">Cloud Engineer | AWS | Linux | Docker</p>
        </div>

        <ul className="flex flex-wrap items-center gap-5">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          </li>
          {profile.linkedin && (
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </li>
          )}
          <li>
            <a href={`mailto:${profile.email}`} className={link}>
              <Mail className="h-4 w-4" aria-hidden="true" /> Email
            </a>
          </li>
        </ul>
      </div>
      <p className="container-x mt-8 text-xs text-fg5">© 2026 {profile.shortName}</p>
    </footer>
  )
}
