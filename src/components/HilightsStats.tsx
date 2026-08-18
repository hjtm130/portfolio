import {
  businessAwards,
  engineeringAwards,
  presentations,
  businessProjects,
  engineeringProjects,
  globalExperiences,
  media,
} from "../data/index"

function formatCount(
  count: number
) {
  return count >= 10
    ? `${count}+`
    : count
}

export default function HighlightStats() {

  const stats = [
    {
      value:
        businessAwards.length +
        engineeringAwards.length,

      label:
        "Awards",
    },

    {
      value:
        presentations.length,

      label:
        "Academic Presentations",
    },

    {
      value:
        businessProjects.length +
        engineeringProjects.length,

      label:
        "Projects",
    },

    {
      value:
        globalExperiences.length,

      label:
        "Global Experiences",
    },

    {
      value:
        media.length,

      label:
        "Media Features",
    },
  ]

  return (
    <div className="stats">

      {stats.map((stat) => (
        <div
          className="stat"
          key={stat.label}
        >

          <strong>
            {formatCount(stat.value)}
          </strong>

          <span>
            {stat.label}
          </span>

        </div>
      ))}

    </div>
  )
}