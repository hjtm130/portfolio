const navigation = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Research",
    href: "#research",
  },
  {
    label: "Business",
    href: "#business",
  },
  {
    label: "Engineering",
    href: "#engineering",
  },
  {
    label: "Global",
    href: "#global",
  },
  {
    label: "Media",
    href: "#media",
  },
]

export default function Header() {
  return (
    <header className="header">

      <a
        href="#top"
        className="header-logo"
      >
        CHISE ITO
      </a>

      <nav className="header-nav">

        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
          >
            {item.label}
          </a>
        ))}

      </nav>

      <a
        href="#contact"
        className="header-contact"
      >
        Contact
      </a>

    </header>
  )
}