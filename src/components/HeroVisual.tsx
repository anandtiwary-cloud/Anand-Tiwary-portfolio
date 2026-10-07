import { Cloud, Server, Container, Globe, AppWindow, type LucideIcon } from 'lucide-react'

type Node = { icon: LucideIcon; label: string; sub: string; tone: string }

const nodes: Node[] = [
  { icon: Cloud, label: 'AWS', sub: 'VPC · Subnet · Security Group', tone: 'text-accent' },
  { icon: Server, label: 'EC2', sub: 'Linux server · SSH', tone: 'text-sky2' },
  { icon: Container, label: 'Docker', sub: 'Dockerfile · Compose', tone: 'text-sky2' },
  { icon: Globe, label: 'Nginx', sub: 'Reverse proxy', tone: 'text-sky2' },
  { icon: AppWindow, label: 'Application', sub: 'React + Node.js (PM2)', tone: 'text-accent' },
]

/** Compact "deployment stack" visual: AWS → EC2 → Docker → Nginx → Application */
export default function HeroVisual() {
  return (
    <div
      className="card relative overflow-hidden p-5 sm:p-6"
      role="img"
      aria-label="Deployment stack: AWS to EC2 to Docker to Nginx to Application"
    >
      <div className="mb-5 flex items-center justify-between border-b border-ink-700 pb-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        </div>
        <span className="font-mono text-xs text-fg4">deployment-stack</span>
        <span className="flex items-center gap-1.5 font-mono text-xs text-fg4">
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-emerald-400" aria-hidden="true" />
          diagram
        </span>
      </div>

      <ol className="flex flex-col items-center">
        {nodes.map((n, i) => (
          <li key={n.label} className="flex w-full flex-col items-center">
            <div
              className="flex w-full max-w-xs animate-float items-center gap-4 rounded-xl border border-ink-600 bg-ink-800/80 px-4 py-3"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-600 bg-ink-900">
                <n.icon className={`h-5 w-5 ${n.tone}`} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-fg">{n.label}</span>
                <span className="block truncate font-mono text-[11px] text-fg4">{n.sub}</span>
              </span>
            </div>
            {i < nodes.length - 1 && <div className="flow-v my-1 h-6 animate-flow" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </div>
  )
}
