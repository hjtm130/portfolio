export type Link = {
  label: string
  url: string
}

export type Award = {
  year: number
  title: string
  award: string
  organization?: string
  description?: string
  role?: string
  image?: string
  links?: Link[]
}

export type Presentation = {
  year: number
  title: string
  venue?: string
  type?: string
  description?: string
  image?: string
  links?: Link[]
}

export type Project = {
  year?: number
  title: string
  category: string
  description: string
  tech?: string[]
  images?: string[]
  links?: Link[]
  download?: {
    label: string
    file: string
  }
}

export type Experience = {
  year: number
  title: string
  organization?: string
  description?: string
  image?: string
  links?: Link[]
}

export type Media = {
  year: number
  type: "TV" | "Article" | "Web" | "Interview"
  title: string
  publisher: string
  description?: string
  image?: string
  url: string
}