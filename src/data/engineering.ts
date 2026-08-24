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
    year: 2026,
    title: "Audit MAX",
    category: "Web / Full Stack",
    description:
      "航空業界の監査業務を支援するWebアプリケーション。",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    images: [
      "/images/projects/korvapuusti.png",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Tew12345678910/KORVAPUUSTI-Junction",
      },
      {
        label: "Project Documentation",
        url: "/documents/korvapuusti-junction.pdf",
      },
    ],
  },
  {
    year: 2026,
    title: "Portfolio",
    category: "Web",
    description:
      "React / TypeScriptを利用した個人Webサイト",
    tech: [
      "React",
      "TypeScript",
      "Vite",
    ],
    images: [
      "/images/projects/portfolio.png",
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
      "/images/projects/sscss.png",
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
    year: 2024,
    title: "RollingStockManager",
    category: "Web Application",
    description:
      "災害用備蓄の管理を支援するWebアプリケーション。ユーザー認証、アイテム管理、画像アップロード、使用期限・保管場所・数量の管理などを実装",
    tech: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "JavaScript",
      "HTML",
      "CSS",
      "JWT",
    ],
    images: [
      "/images/projects/RollingStockManager01.jpg",
      "/images/projects/RollingStockManager02.jpg",
      "/images/projects/RollingStockManager03.jpg",
      "/images/projects/RollingStockManager04.jpg",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/raptech-jp/RollingStockManager",
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
      "/images/projects/kosen_game1.png",
      "/images/projects/kosen_game2.png",
      "/images/projects/kosen_game3.png",
    ],
    download: {
      label: "Download",
      file: "public/games/高専生活(仮).zip",
    },
  },
]