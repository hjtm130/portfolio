import { profile } from "../data"

export default function Footer() {

  return (
    <footer className="footer">

      <strong>
        {profile.name}
      </strong>

      <span>
        Research / Business / Engineering / Global
      </span>

      <small>
        © {new Date().getFullYear()} {profile.name}
      </small>

    </footer>
  )
}