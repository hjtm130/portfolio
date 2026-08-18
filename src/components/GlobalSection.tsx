import SectionHeader from "./SectionHeader"
import LinkList from "./LinkList"

import {
  globalExperiences,
} from "../data"

export default function GlobalSection() {

  return (
    <>
      <SectionHeader
        eyebrow="05 / GLOBAL"
        title="Global"
        description="Learning beyond borders."
      />

      <div className="global-list">

        {globalExperiences.map(
          (experience) => (

            <article
              className="global-feature"
              key={`${experience.year}-${experience.title}`}
            >

              {experience.image && (
                <div className="global-image">
                  <img
                    src={experience.image}
                    alt={experience.title}
                  />
                </div>
              )}

              <div className="global-content">

                <span className="global-country">
                  {experience.organization}
                </span>

                <span className="global-year">
                  {experience.year}
                </span>

                <h3>
                  {experience.title}
                </h3>

                <p>
                  {experience.description}
                </p>

                <LinkList
                  links={experience.links}
                />

              </div>

            </article>

          )
        )}

      </div>
    </>
  )
}