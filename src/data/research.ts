import type { Presentation } from "./types"

export const presentations: Presentation[] = [
  {
    year: 2025,
    title: "機械学習を用いたフィッシング詐欺サイト検知手法の設計",
    venue: "第87回情報処理学会全国大会",
    type: "Oral Presentation",
    description: "学生奨励賞を受賞",
    links:[
        {
            label: "Official Website",
            url: "https://www.ipsj.or.jp/award/taikaigakusei.html",
        },
    ]
  },
  {
    year: 2025,
    venue: "DICOMO2025シンポジウム",
    type: "Oral Presentation",
    title: "機械学習を用いたフィッシング詐欺サイト検知手法の提案",
    description: "ナイトテクニカルセッション 第1位を受賞",
    links:[
        {
            label: "Official Website",
            url: "https://dicomo.org/2025/commendation/",
        },
    ]
  },
  {
    year: 2024,
    venue: "シン・ITRC 第56回研究会",
    type: "Poster Presentation",
    title: "機械学習を用いたフィッシング詐欺サイトの自動検知",
    description:
      "初の学会発表",
    links:[
        {
            label: "Official Website",
            url: "https://www.itrc.net/meet/56-program/",
        },
    ]
  },
]

export const researchProfile = {
  title: "AI Runtime Security",

  description: `
    セキュリティについて研究しています。
  `,

  keywords: [
    "AI",
    "Security",
    "Machine Learning",
  ],
}