import { Code2, Database, Globe, Server, Shield, Container, Network, Layers } from 'lucide-react'
import { GithubIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import type { ReactNode } from 'react'

function Step({ icon, title, sub }: { icon: ReactNode; title: string; sub?: string }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-xl border border-ink-600 bg-ink-800/80 px-4 py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-600 bg-ink-900 text-sky2">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-fg">{title}</span>
        {sub && <span className="block font-mono text-[11px] text-fg4">{sub}</span>}
      </span>
    </div>
  )
}

function Connector({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-3 py-1.5 pl-[1.15rem]" aria-hidden="true">
      <div className="flow-v h-6 animate-flow" />
      {label && <span className="font-mono text-[11px] text-fg4">{label}</span>}
    </div>
  )
}

/** Dashed, labelled container used for VPC / Subnet / Security Group / EC2 boundaries. */
function Boundary({
  icon,
  label,
  tone,
  children,
}: {
  icon: ReactNode
  label: string
  tone: string
  children: ReactNode
}) {
  return (
    <div className={`rounded-2xl border border-dashed p-4 sm:p-5 ${tone}`}>
      <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
        {icon} {label}
      </p>
      {children}
    </div>
  )
}

export default function Architecture() {
  return (
    <section id="architecture" aria-labelledby="arch-title" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="architecture"
          title="How I Deploy Applications"
          id="arch-title"
          description="A simplified view of the deployment setup I've worked with in my internship and projects. It's a learning-scale setup, not an enterprise production design."
        />

        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left: path outside AWS */}
            <div className="card h-fit p-5 sm:p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-fg4">Source → Server</p>
              <Step icon={<Code2 className="h-4 w-4" />} title="Developer" sub="writes & commits code" />
              <Connector label="git push" />
              <Step icon={<GithubIcon className="h-4 w-4" />} title="GitHub" sub="source-code management" />
              <Connector label="git pull / clone on server" />
              <Step icon={<Server className="h-4 w-4" />} title="AWS EC2" sub="Linux server, accessed over SSH" />
            </div>

            {/* Right: inside AWS */}
            <div className="card p-4 sm:p-6">
              <Boundary
                tone="border-accent/40 text-accent"
                icon={<Layers className="h-3.5 w-3.5" />}
                label="AWS VPC"
              >
                <div className="mb-4 flex items-center gap-2 text-fg2">
                  <Globe className="h-4 w-4 text-sky2" aria-hidden="true" />
                  <span className="text-sm">
                    <span className="font-semibold text-fg">Internet Gateway</span>
                    <span className="text-fg4"> · public traffic enters here</span>
                  </span>
                </div>

                <Boundary
                  tone="border-sky2/40 text-sky2"
                  icon={<Network className="h-3.5 w-3.5" />}
                  label="Subnet"
                >
                  <Boundary
                    tone="border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
                    icon={<Shield className="h-3.5 w-3.5" />}
                    label="Security Group · controls inbound ports"
                  >
                    <div className="text-fg2">
                      <Step icon={<Server className="h-4 w-4" />} title="EC2 instance" sub="Linux" />
                      <Connector />
                      <Step
                        icon={<Container className="h-4 w-4" />}
                        title="Docker / Docker Compose"
                        sub="multi-container deployment"
                      />
                      <Connector />
                      <Step icon={<Globe className="h-4 w-4" />} title="Nginx" sub="web server / reverse proxy" />
                      <Connector />
                      <div className="grid gap-3 sm:grid-cols-2">
                        <Step icon={<Code2 className="h-4 w-4" />} title="React frontend" sub="served via Nginx" />
                        <Step icon={<Code2 className="h-4 w-4" />} title="Node.js backend" sub="managed with PM2" />
                      </div>
                      <Connector />
                      <Step icon={<Database className="h-4 w-4" />} title="Database" sub="MySQL / MongoDB" />
                    </div>
                  </Boundary>
                </Boundary>
              </Boundary>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
