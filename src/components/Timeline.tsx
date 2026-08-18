import {
  businessAwards,
  engineeringAwards,
  presentations,
  globalExperiences,
  media,
} from "../data"

type TimelineItem = {
  year: string
  category: string
  title: string
}

export default function Timeline() {

  const items: TimelineItem[] = [

    ...presentations.map(
      (item) => ({
        year: item.year,
        category: "Research",
        title: item.title,
      })
    ),

    ...businessAwards.map(
      (item) => ({
        year: item.year,
        category: "Business",
        title: item.title,
      })
    ),

    ...engineeringAwards.map(
      (item) => ({
        year: item.year,
        category: "Engineering",
        title: item.title,
      })
    ),

    ...globalExperiences.map(
      (item) => ({
        year: item.year,
        category: "Global",
        title: item.title,
      })
    ),

    ...media.map(
      (item) => ({
        year: item.year,
        category: "Media",
        title: item.title,
      })
    ),
  ]

  const sorted =
    [...items].sort(
      (a, b) =>
        Number(b.year) -
        Number(a.year)
    )

  return (
    <div className="timeline">

      {sorted.map(
        (item, index) => (

          <article
            className="timeline-item"
            key={`${item.year}-${item.title}-${index}`}
          >

            <span>
              {item.year}
            </span>

            <div>

              <small>
                {item.category}
              </small>

              <h3>
                {item.title}
              </h3>

            </div>

          </article>

        )
      )}

    </div>
  )
}