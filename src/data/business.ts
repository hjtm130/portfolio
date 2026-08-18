import type { Award, Project } from "./types"

export const businessAwards: Award[] = [
  {
    year: 2024,
    title: "GCON2024",
    award: "ファイナリスト賞",
    organization: "独立行政法人国立高等専門学校機構",
    description: "中高生の性教育のためのAIチャットを開発",
    role: "リーダー・企画・開発・プレゼン",
    links:[
        {
            label: "Official Website",
            url: "https://gcon.kosen-k.go.jp/2024/final-round",
        },
        {
            label: "GitHub",
            url: "https://github.com/hjtm130/gcon_gender",
        },
    ]
  },
  {
    year: 2024,
    title: "第2回高専起業家サミット",
    award: "イントラプレナー部門 最優秀賞",
    organization: "独立行政法人国立高等専門学校機構、月刊高専",
    description: "高齢者の介護における歯磨きで「磨いている箇所」をリアルタイムで可視化するサービスを開発",
    role: "インタビュー・ビジネスプラン・広報",
    links:[
        {
            label: "Official Website",
            url: "https://startup.gekkan-kosen.com/report/2nd_2024/",
        },
    ]
  },
  {
    year: 2025,
    title: "DCON2024",
    award: "第4位、トヨタ自動車賞、丸井グループ賞、ライオン賞",
    organization: "日本ディープラーニング協会、全国高等専門学校連合会、日本放送協会（名義主催申請予定）、NHKエンタープライズ",
    description: "子供の歯磨きにおいて「磨いている箇所」をリアルタイムで可視化するサービスを開発",
    role: "ビジネスプラン・広報・ピッチ",
    links:[
        {
            label: "Official Website",
            url: "https://dcon.ai/dcon2025/results2025/",
        },
    ]
  },
  {
    year: 2025,
    title: "Startup Weekend Oulu",
    award: "第3位",
    organization: "Startup Weekend Oulu Organizing Team",
    role: "インタビュー・ビジネスプラン・ピッチアイデア",
    description: "多国籍チームでチームビルディング、アイデア出し、ビジネスピッチまで一貫して実施"
  },
]

export const businessProjects: Project[] = [
  {
    year: 2026,
    title: "Properio AI",
    category: "Business Contest",

    description:
      "歯の磨き残しという課題に対するサービスを企画・開発。磨き残し箇所をリアルタイムで可視化するサービスを開発し、ビジネスコンテストで多数受賞",

    links: [
      {
        label: "Project",
        url: "https://dcon.ai/teams/sendai2025/",
      },
    ],
  },
  {
    year: 2025,
    title: "SEI",
    category: "Business Contest",

    description:
      "実体験を基にした「中高生への性教育の不足」という課題に対するサービスを企画・開発。AIチャットを搭載したWebアプリを開発し、ビジネスコンテストで受賞",

    links: [
      {
        label: "Project",
        url: "https://github.com/hjtm130/gcon_gender",
      },
    ],
  },
]