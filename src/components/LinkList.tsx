import type { Link } from "../data/types"

type Props = {
  links?: Link[]
}

export default function LinkList({
  links,
}: Props) {

  if (!links?.length) {
    return null
  }

  return (
    <div className="link-list">

      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
          <span>↗</span>
        </a>
      ))}

    </div>
  )
}