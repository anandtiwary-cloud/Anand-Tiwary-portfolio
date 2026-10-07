type Props = {
  eyebrow: string
  title: string
  description?: string
  id?: string
}

export default function SectionHeading({ eyebrow, title, description, id }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sky2">
        <span className="text-accent">$</span> {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-fg3">{description}</p>}
    </div>
  )
}
