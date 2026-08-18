import { useState } from "react"

type Props = {
  images?: string[]
  alt?: string
  onOpen?: () => void
}

export default function ImageCarousel({
  images,
  alt = "",
  onOpen,
}: Props) {
  const [current, setCurrent] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="image-carousel image-empty">
        <span>No Image</span>
      </div>
    )
  }

  const hasMultiple = images.length > 1

  const previous = (event: React.MouseEvent) => {
    event.stopPropagation()

    setCurrent((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    )
  }

  const next = (event: React.MouseEvent) => {
    event.stopPropagation()

    setCurrent((prev) =>
      (prev + 1) % images.length
    )
  }

  return (
    <div
      className="image-carousel"
      onClick={onOpen}
    >
      <img
        key={images[current]}
        src={images[current]}
        alt={alt}
        className="carousel-image"
      />

      {hasMultiple && (
        <>
          <button
            className="carousel-arrow carousel-prev"
            onClick={previous}
            aria-label="Previous image"
          >
            ←
          </button>

          <button
            className="carousel-arrow carousel-next"
            onClick={next}
            aria-label="Next image"
          >
            →
          </button>

          <div className="carousel-counter">
            {current + 1} / {images.length}
          </div>
        </>
      )}

      <div className="carousel-expand">
        Click to expand
      </div>
    </div>
  )
}