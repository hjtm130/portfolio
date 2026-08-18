type Props = {
  eyebrow: string
  title: string
  description?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="section-header">

      <span className="section-eyebrow">
        {eyebrow}
      </span>

      <h2>
        {title}
      </h2>

      {description && (
        <p>
          {description}
        </p>
      )}

    </div>
  )
}