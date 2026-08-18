type Props = {
  id: string
  children: React.ReactNode
}

export default function Section({
  id,
  children,
}: Props) {

  return (
    <section
      id={id}
      className="section"
    >
      <div className="section-inner">
        {children}
      </div>
    </section>
  )
}