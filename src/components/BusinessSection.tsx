import SectionHeader from "./SectionHeader"
import LinkList from "./LinkList"

import {
  businessAwards,
  businessProjects,
} from "../data"

export default function BusinessSection() {

  return (
    <>
      <SectionHeader
        eyebrow="03 / BUSINESS"
        title="Business"
        description="Turning ideas into value."
      />

      <div className="business-awards">

        <span className="label">
          SELECTED AWARDS
        </span>

        {businessAwards.map(
          (item) => (

            <article
              className="award-card"
              key={`${item.year}-${item.title}`}
            >

              <span className="award-year">
                {item.year}
              </span>

              <div>

                <h3>
                  {item.title}
                </h3>

                <strong>
                   {item.award}
                </strong>

                {item.organization && (
                  <small>
                    {item.organization}
                  </small>
                )}

                {item.description && (
                  <p>
                    {item.description}
                  </p>
                )}

                {item.role && (
                  <p className="role">
                    Role: {item.role}
                  </p>
                )}

                <LinkList
                  links={item.links}
                />

              </div>

            </article>

          )
        )}

      </div>


      <div className="business-projects">

        <span className="label">
          PROJECTS & ACTIVITIES
        </span>

        <div className="business-project-grid">

          {businessProjects.map(
            (project, index) => (

              <article
                key={project.title}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <LinkList
                  links={project.links}
                />

              </article>

            )
          )}

        </div>

      </div>
    </>
  )
}