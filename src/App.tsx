import Header from "./components/Header"
import Hero from "./components/Hero"
import Section from "./components/Section"
import SectionHeader from "./components/SectionHeader"
import HighlightStats from "./components/HilightsStats"

import ResearchSection from "./components/ResearchSection"
import BusinessSection from "./components/BusinessSection"
import EngineeringSection from "./components/EngineeringSection"
import GlobalSection from "./components/GlobalSection"
import MediaSection from "./components/MediaSection"

import Timeline from "./components/Timeline"
import Footer from "./components/Footer"

export default function App() {

  return (
    <div className="site">

      <Header />

      <main>

        <Hero />

        <Section id="about">

          <SectionHeader
            eyebrow="01 / INTRODUCTION"
            title="Who I am"
          />

          <div className="intro-layout">

            <div className="intro-main">

              <p className="intro-lead">
                Technology is the medium.
                Creating value is the goal.
              </p>

              <p>
                情報電子工学を基盤として、
                AI・セキュリティを中心とした研究に取り組んでいます。
                同時に、ビジネスコンテストやハッカソン、
                ソフトウェア開発、海外留学など、
                興味を持った領域へ積極的に挑戦してきました。
              </p>

              <p>
                技術を「研究する」だけでなく、
                社会に実装し、人や社会に新しい価値を
                生み出すところまで関わることを目指しています。
              </p>

            </div>

          </div>

          <HighlightStats />

        </Section>


        <Section id="research">
          <ResearchSection />
        </Section>


        <Section id="business">
          <BusinessSection />
        </Section>


        <Section id="engineering">
          <EngineeringSection />
        </Section>


        <Section id="global">
          <GlobalSection />
        </Section>


        <Section id="media">
          <MediaSection />
        </Section>


        <Section id="contact">

          <SectionHeader
            eyebrow="07 / CONTACT"
            title="Let's connect."
          />

          <div className="contact-block">

            <p>
              Interested in my work or want to talk?
            </p>

            <a
              href="mailto:chise.ito.tohoku@gmail.com"
              className="contact-email"
            >
              chise.ito.tohoku@gmail.com
            </a>

          </div>

        </Section>

      </main>

      <Footer />

    </div>
  )
}