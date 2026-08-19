import type { Award, Project } from "./types"

export const engineeringAwards: Award[] = [
  {
    year: 2025,
    title: "JunctionX Oulu",
    award: "VIEW Challenge 第3位",
    description: "VIEWS武力紛争予測システムのための公開APIを実装",
    links:[
        {
            label: "Official Website",
            url: "https://github.com/hjtm130/JunctionHack",
        },
    ]
  },
  {
    year: 2023,
    title: "Hack U KOSEN 2023",
    award: "Happy Hacking賞",
    description:
      "クリスマスをテーマとして、イルミネーションの光を集めてツリーを飾るUnity ARアプリを開発（UI・UX設計実装を担当）",
    links:[
        {
            label: "Official Website",
            url: "https://www.sendai-nct.ac.jp/s20240125-4/",
        },
    ]
  },
]

export const engineeringProjects: Project[] = [
  {
    title: "Portfolio",
    category: "Web",
    year: 2026,
    description:
      "React / TypeScriptを利用した個人Webサイト",
    tech: [
      "React",
      "TypeScript",
      "Vite",
    ],
    images: [
      "/src/images/projects/portfolio.png",
    ],
    links: [
      {
        label: "Live Demo",
        url: "https://portfolio-hjtm131.vercel.app/",
      },
      {
        label: "GitHub",
        url: "https://github.com/hjtm130/portfolio",
      },
    ],
  },
  {
    title: "SS抜きCSS",
    category: "Web",
    year: 2024,
    description:
      "C言語を用いて、Webページの装飾を行うWebアプリ",
    tech: [
      "C",
      "HTML",
      "CSS",
      "JavaScripts",
      "Azure",
    ],
    images: [
      "/src/images/projects/sscss.png",
    ],
    links: [
      {
        label: "More Info",
        url: "https://topaz.dev/projects/65b5885783f18c46246b",
      },
      {
        label: "GitHub",
        url: "https://github.com/doxu-san/caesarsalad",
      },
    ],
  },
  {
    title: "Game Project",
    category: "Game",
    year: 2023,
    description:
      "Unity / C#による2Dゲーム開発",
    tech: [
      "Unity",
      "C#",
    ],
    images: [
      "/src/images/projects/kosen_game1.png",
      "/src/images/projects/kosen_game2.png",
      "/src/images/projects/kosen_game3.png",
    ],
    download: {
      label: "Download",
      file: "public/games/高専生活(仮).zip",
    },
  },
]