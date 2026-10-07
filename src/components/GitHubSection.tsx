import { useEffect, useState } from 'react'
import { ExternalLink, Star } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
}

type State =
  | { status: 'loading' }
  | { status: 'ready'; repos: Repo[] }
  | { status: 'unavailable' }

export default function GitHubSection() {
  const [state, setState] = useState<State>({ status: 'loading' })

  useEffect(() => {
    const ctrl = new AbortController()
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=30`, {
      signal: ctrl.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status))
        return r.json() as Promise<Repo[]>
      })
      .then((data) => {
        const repos = data.filter((r) => !r.fork).slice(0, 4)
        setState({ status: 'ready', repos })
      })
      .catch((e: unknown) => {
        if ((e as Error).name !== 'AbortError') setState({ status: 'unavailable' })
      })
    return () => ctrl.abort()
  }, [])

  return (
    <section id="github" aria-labelledby="github-title" className="section border-y border-ink-800 bg-ink-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="github"
          title="Building. Deploying. Learning."
          id="github-title"
          description="My code and deployment work lives on GitHub."
        />

        <Reveal>
          {state.status === 'ready' && state.repos.length > 0 && (
            <ul className="grid gap-4 sm:grid-cols-2">
              {state.repos.map((r) => (
                <li key={r.id}>
                  <a
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group flex h-full flex-col p-5 transition-colors hover:border-ink-600"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="truncate font-mono text-sm font-medium text-fg">{r.name}</span>
                      <ExternalLink className="h-4 w-4 shrink-0 text-fg4 group-hover:text-fg" aria-hidden="true" />
                    </span>
                    <span className="mt-2 text-sm leading-relaxed text-fg3">
                      {r.description ?? 'No description provided.'}
                    </span>
                    <span className="mt-auto flex items-center gap-4 pt-4 font-mono text-xs text-fg4">
                      {r.language && <span>{r.language}</span>}
                      {r.stargazers_count > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-3 w-3" aria-hidden="true" /> {r.stargazers_count}
                        </span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}

          {state.status === 'loading' && (
            <p className="font-mono text-sm text-fg4" role="status">
              Loading repositories…
            </p>
          )}

          {(state.status === 'unavailable' || (state.status === 'ready' && state.repos.length === 0)) && (
            <div className="card flex flex-col gap-2 p-6">
              <p className="text-fg2">
                Browse my repositories, Dockerfiles, and deployment work on GitHub.
              </p>
              <p className="font-mono text-xs text-fg4">github.com/{profile.githubUser}</p>
            </div>
          )}
        </Reveal>

        <div className="mt-8">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <GithubIcon className="h-4 w-4" /> Visit GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
