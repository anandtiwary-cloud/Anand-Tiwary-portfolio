import { useState, type FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const field =
  'w-full rounded-lg border border-ink-600 bg-ink-900 px-4 py-2.5 text-sm text-fg placeholder:text-fg5 focus:border-sky2 focus:outline-none'

export default function Contact() {
  const [name, setName] = useState('')
  const [from, setFrom] = useState('')
  const [message, setMessage] = useState('')
  const [opened, setOpened] = useState(false)

  // There is no backend: submitting opens the visitor's own email app with the message pre-filled.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = `Portfolio enquiry from ${name}`
    const body = `${message}\n\n— ${name}${from ? ` (${from})` : ''}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="contact"
          title="Let's Connect"
          id="contact-title"
          description="I'm currently looking for entry-level Cloud Engineer opportunities where I can apply my AWS, Linux, Docker, and deployment skills."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="card flex items-center gap-4 p-5 transition-colors hover:border-ink-600"
                >
                  <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-mono text-xs text-fg4">Email</span>
                    <span className="block break-all text-fg">{profile.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 p-5 transition-colors hover:border-ink-600"
                >
                  <GithubIcon className="h-5 w-5 shrink-0 text-accent" />
                  <span className="min-w-0">
                    <span className="block font-mono text-xs text-fg4">GitHub</span>
                    <span className="block break-all text-fg">github.com/{profile.githubUser}</span>
                  </span>
                </a>
              </li>
              {profile.linkedin && (
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card flex items-center gap-4 p-5 transition-colors hover:border-ink-600"
                  >
                    <LinkedinIcon className="h-5 w-5 shrink-0 text-accent" />
                    <span className="min-w-0">
                      <span className="block font-mono text-xs text-fg4">LinkedIn</span>
                      <span className="block break-all text-fg">
                        {profile.linkedin.replace(/^https?:\/\/(www\.)?/, '')}
                      </span>
                    </span>
                  </a>
                </li>
              )}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="card space-y-4 p-6">
              <div>
                <label htmlFor="c-name" className="mb-1.5 block text-sm text-fg2">
                  Name
                </label>
                <input id="c-name" required value={name} onChange={(e) => setName(e.target.value)} className={field} autoComplete="name" />
              </div>
              <div>
                <label htmlFor="c-email" className="mb-1.5 block text-sm text-fg2">
                  Your email <span className="text-fg5">(optional)</span>
                </label>
                <input id="c-email" type="email" value={from} onChange={(e) => setFrom(e.target.value)} className={field} autoComplete="email" />
              </div>
              <div>
                <label htmlFor="c-msg" className="mb-1.5 block text-sm text-fg2">
                  Message
                </label>
                <textarea id="c-msg" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={field} />
              </div>
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                <Send className="h-4 w-4" aria-hidden="true" /> Open in email app
              </button>
              <p className="text-xs text-fg4" role="status">
                {opened
                  ? 'Your email app should have opened with the message ready to send. If not, write to the address on the left.'
                  : 'This form has no server. It opens your email app with the message pre-filled.'}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
