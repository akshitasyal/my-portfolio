import HeroPage from '@/components/HeroPage'
import Expertise from '@/components/Expertise'
import FeaturedWork from '@/components/FeaturedWork'
import ProjectsSection from '@/components/ProjectSection'

export default function Page() {
  return (
    <div id="page-scroll"
      className="h-[100dvh] w-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <HeroPage />
      <Expertise />
      <FeaturedWork />
      <ProjectsSection />

    </div>
  )
}
