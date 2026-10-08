import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/hero/Hero'
import { HowItWorks } from '../components/how-it-works/HowItWorks'
import { Overview } from '../components/overview/Overview'
import { VideoShowcase } from '../components/video/VideoShowcase'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      <Hero />
      <Overview />
      <VideoShowcase />
      <HowItWorks />
    </main>
  )
}
