import { useEffect, useState } from "react"
import LinkList from "./LinkList"
import type { Link } from "../data/types"

type Props = {
  images: string[]
  title: string
  description?: string
  links?: Link[]
  onClose: () => void
}

export default function ImageModal({
  images,
  title,
  description,
  links,
  onClose,
}: Props) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose()
      }

      if (event.key === "ArrowLeft") {
        setCurrent((prev) =>
          prev === 0
            ? images.length - 1
            : prev - 1
        )
      }

      if (event.key === "ArrowRight") {
        setCurrent((prev) =>
          (prev + 1) % images.length
        )
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown
    )

    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      )

      document.body.style.overflow = ""
    }
  }, [images.length, onClose])

  return (
    <div
      className="image-modal"
      onClick={onClose}
    >

      <div
        className="modal-inner"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="modal-image-area">

          <img
            src={images[current]}
            alt={title}
            className="modal-image"
          />

          {images.length > 1 && (
            <>
              <button
                className="modal-arrow modal-prev"
                onClick={() =>
                  setCurrent((prev) =>
                    prev === 0
                      ? images.length - 1
                      : prev - 1
                  )
                }
              >
                ←
              </button>

              <button
                className="modal-arrow modal-next"
                onClick={() =>
                  setCurrent(
                    (prev) =>
                      (prev + 1) %
                      images.length
                  )
                }
              >
                →
              </button>
            </>
          )}

        </div>

        <div className="modal-info">

          <div className="modal-counter">
            {current + 1} / {images.length}
          </div>

          <h2>
            {title}
          </h2>

          {description && (
            <p>
              {description}
            </p>
          )}

          <LinkList
            links={links}
          />

        </div>

      </div>

    </div>
  )
}