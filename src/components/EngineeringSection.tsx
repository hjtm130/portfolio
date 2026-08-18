import { useState } from "react"

import SectionHeader from "./SectionHeader"
import LinkList from "./LinkList"
import ImageCarousel from "./ImageCarousel"
import ImageModal from "./ImageModal"

import {
  engineeringAwards,
  engineeringProjects,
} from "../data"

export default function EngineeringSection() {

  const [selectedProject, setSelectedProject] =
    useState<
      (typeof engineeringProjects)[number] | null
    >(null)

  return (
    <>
      <SectionHeader
        eyebrow="04 / ENGINEERING"
        title="Engineering"
        description="Building ideas into working systems."
      />

      <div className="engineering-awards">

        <span className="label">
          RECOGNITION
        </span>

        {engineeringAwards.map(
          (award) => (
            <div
              className="engineering-award-row"
              key={`${award.year}-${award.title}`}
            >
              <div>
                 {award.award}
              </div>

              <span>
                {award.title}
              </span>

              <LinkList
                  links={award.links}
                />
            </div>
          )
        )}

      </div>

      <div className="project-grid">

        {engineeringProjects.map(
          (project, index) => (

            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <ImageCarousel
                images={project.images}
                alt={project.title}
                onOpen={() =>
                  setSelectedProject(project)
                }
              />

              <div className="project-content">

                <span>
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                {project.tech && (
                  <div className="project-tech">

                    {project.tech.map(
                      (tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      )
                    )}

                  </div>
                )}

                <LinkList
                  links={project.links}
                />

                {project.download && (
                  <a
                    href={project.download.file}
                    download
                    className="project-download"
                  >
                    {project.download.label}
                    <span>↓</span>
                  </a>
                )}

              </div>

            </article>

          )
        )}

      </div>

      {selectedProject && (
        <ImageModal
          images={
            selectedProject.images ?? []
          }
          title={selectedProject.title}
          description={
            selectedProject.description
          }
          links={
            selectedProject.links
          }
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}
    </>
  )
}