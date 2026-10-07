import { GraduationCap } from 'lucide-react'
import { aboutHighlights, education } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="about" title="Fresher focused on cloud engineering" id="about-title" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-fg2">
            <p>
              I'm a Computer Science fresher focused on Cloud Engineering. During my cloud internship I
              got practical experience deploying web applications on AWS Linux servers: setting up the
              network around them, containerizing them, and putting Nginx in front.
            </p>
            <p>
              I'm comfortable working on a Linux server over SSH, writing Dockerfiles and Docker Compose
              files, managing Node.js processes with PM2, and tracking down why a build or deployment
              isn't working. I have exposure to Jenkins CI/CD concepts, Terraform, and Kubernetes, and
              I'm continuing to build depth in them.
            </p>
            <p>
              I'm looking for an entry-level Cloud Engineer role where I can apply these skills and keep
              learning on real infrastructure.
            </p>

            <div className="pt-2">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-fg4">
                What I work with
              </h3>
              <ul className="flex flex-wrap gap-2">
                {aboutHighlights.map((h) => (
                  <li key={h} className="chip chip-accent">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600 bg-ink-800">
                  <GraduationCap className="h-5 w-5 text-sky2" aria-hidden="true" />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg4">Education</h3>
              </div>
              <p className="font-semibold text-fg">{education.school}</p>
              <p className="mt-1 text-sm text-fg3">{education.degree}</p>
              <p className="mt-3 font-mono text-xs text-fg4">
                {education.period} · {education.place}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
