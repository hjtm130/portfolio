import fs from "node:fs"
import path from "node:path"

const outputDir = path.resolve(
  "public/generated-media"
)

fs.mkdirSync(outputDir, {
  recursive: true,
})

console.log("=== Fetch Media Thumbnails ===")

// media.ts を読み込む
const mediaFile = fs.readFileSync(
  path.resolve("src/data/media.ts"),
  "utf-8"
)

// URLを抽出
const urlRegex =
  /url:\s*["'`](https?:\/\/[^"'`]+)["'`]/g

const urls = [
  ...mediaFile.matchAll(urlRegex),
].map((match) => match[1])

console.log(`Found ${urls.length} media URLs`)

// URL → 画像パス
const manifest = {}

/**
 * HTMLを取得
 */
async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
    },
  })

  if (!response.ok) {
    throw new Error(
      `HTTP ${response.status}`
    )
  }

  return response.text()
}

/**
 * OGP画像を取得
 */
function extractOgImage(html) {
  const patterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,

    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,

    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,

    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i,
  ]

  for (const pattern of patterns) {
    const match = html.match(pattern)

    if (match) {
      return match[1]
    }
  }

  return null
}

/**
 * URLから安全なファイル名を作る
 */
function safeFilename(url) {
  return Buffer.from(url)
    .toString("base64url")
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .slice(0, 60)
}

/**
 * メイン処理
 */
async function main() {

  for (const url of urls) {

    try {

      console.log(`Fetching: ${url}`)

      const html =
        await fetchHtml(url)

      const ogImage =
        extractOgImage(html)

      if (!ogImage) {

        console.log(
          "  No og:image found"
        )

        continue
      }

      const imageUrl =
        new URL(
          ogImage,
          url
        ).href

      console.log(
        `  Image: ${imageUrl}`
      )

      const response =
        await fetch(imageUrl, {
          headers: {
            "User-Agent":
              "Mozilla/5.0",
          },
        })

      if (!response.ok) {
        throw new Error(
          `Image HTTP ${response.status}`
        )
      }

      const contentType =
        response.headers.get(
          "content-type"
        ) || ""

      let extension = ".jpg"

      if (
        contentType.includes("png")
      ) {
        extension = ".png"
      }

      if (
        contentType.includes("webp")
      ) {
        extension = ".webp"
      }

      if (
        contentType.includes("gif")
      ) {
        extension = ".gif"
      }

      const filename =
        safeFilename(url) +
        extension

      const filepath =
        path.join(
          outputDir,
          filename
        )

      const buffer =
        Buffer.from(
          await response.arrayBuffer()
        )

      fs.writeFileSync(
        filepath,
        buffer
      )

      // ★ ここが重要
      manifest[url] =
        `/generated-media/${filename}`

      console.log(
        `  Saved: ${filename}`
      )

    } catch (error) {

      console.error(
        `  Failed: ${url}`
      )

      console.error(
        `  ${error.message}`
      )
    }
  }

  // =================================
  // manifest.jsonを必ず生成
  // =================================

  const manifestPath =
    path.join(
      outputDir,
      "manifest.json"
    )

  fs.writeFileSync(
    manifestPath,
    JSON.stringify(
      manifest,
      null,
      2
    ),
    "utf-8"
  )

  console.log("")
  console.log(
    "=== Manifest Generated ==="
  )
  console.log(
    manifestPath
  )
  console.log(
    `Thumbnails: ${
      Object.keys(manifest).length
    }`
  )
}

main()