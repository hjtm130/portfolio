import SectionHeader from "./SectionHeader"
import LinkList from "./LinkList"

import {
  researchProfile,
  presentations,
} from "../data"

export default function ResearchSection() {

  return (
    <>
      <SectionHeader
        eyebrow="02 / RESEARCH"
        title="Research"
        description="Exploring technology through research."
      />

      <div className="research-layout">

        <article className="research-main">

          <span className="label">
            CURRENT RESEARCH
          </span>

          <h3>
            {researchProfile.title}
          </h3>

          <p>
            {researchProfile.description}
          </p>

          <div className="tag-list">

            {researchProfile.keywords.map(
              (keyword) => (
                <span key={keyword}>
                  {keyword}
                </span>
              )
            )}

          </div>

        </article>


        <div className="research-presentations">

          <span className="label">
            ACADEMIC PRESENTATIONS
          </span>

          {presentations.map(
            (item) => (

              <article
                className="presentation"
                key={`${item.year}-${item.title}`}
              >

                <span>
                  {item.year}
                </span>

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  {item.venue && (
                    <small>
                      {item.venue}
                    </small>
                  )}

                  {item.type && (
                    <p>
                      {item.type}
                    </p>
                  )}

                  {item.description && (
                    <p>
                      {item.description}
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

      </div>
    </>
  )
}