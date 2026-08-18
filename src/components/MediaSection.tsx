import { useEffect, useState } from "react"
import { media } from "../data/media"

type ThumbnailManifest = Record<string, string>

export default function MediaSection() {
  const [thumbnails, setThumbnails] =
    useState<ThumbnailManifest>({})

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    const loadThumbnails = async () => {
      try {
        const response = await fetch(
          "/generated-media/manifest.json"
        )

        if (!response.ok) {
          throw new Error(
            `Manifest HTTP ${response.status}`
          )
        }

        const data =
          (await response.json()) as ThumbnailManifest

        console.log(
          "Media thumbnail manifest:",
          data
        )

        setThumbnails(data)
      } catch (error) {
        console.error(
          "Failed to load media thumbnails:",
          error
        )

        setThumbnails({})
      } finally {
        setLoading(false)
      }
    }

    loadThumbnails()
  }, [])

  return (
    <section
      id="media"
      className="section media-section"
    >
      <div className="section-heading">

        <span className="section-label">
          06 / MEDIA
        </span>

        <h2>
          Media
        </h2>

        <p>
          Featured in media, interviews and broadcasts.
        </p>

      </div>

      <div className="media-grid">

        {media.map((item) => {

          const thumbnail =
            thumbnails[item.url]

          console.log(
            item.title,
            "→",
            thumbnail
          )

          return (
            <article
              key={item.url}
              className="media-card"
            >

              {/* =====================
                  THUMBNAIL
              ===================== */}

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="media-thumbnail"
              >

                {loading ? (

                  <div className="media-thumbnail-placeholder">
                    <span>
                      Loading...
                    </span>
                  </div>

                ) : thumbnail ? (

                  <img
                    src={thumbnail}
                    alt={item.title}
                    loading="lazy"
                    onError={(event) => {
                      console.error(
                        "Image failed:",
                        thumbnail
                      )

                      event.currentTarget.style.display =
                        "none"
                    }}
                  />

                ) : (

                  <div className="media-thumbnail-placeholder">
                    <span>
                      {item.type}
                    </span>
                  </div>

                )}

                <span className="media-open">
                  ↗
                </span>

              </a>

              {/* =====================
                  CONTENT
              ===================== */}

              <div className="media-content">

                <div className="media-meta">

                  <span className="media-type">
                    {item.type}
                  </span>

                  <span className="media-year">
                    {item.year}
                  </span>

                </div>

                <span className="media-publisher">
                  {item.publisher}
                </span>

                <h3>
                  {item.title}
                </h3>

                {item.description && (
                  <p>
                    {item.description}
                  </p>
                )}

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-link"
                >
                  View article

                  <span>
                    ↗
                  </span>
                </a>

              </div>

            </article>
          )
        })}

      </div>
    </section>
  )
}