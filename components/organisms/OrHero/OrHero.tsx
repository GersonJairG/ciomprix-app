import { AtButton } from '@/components/atoms'

interface OrHeroProps {
  callToAction?: () => void
}

export const OrHero = ({ callToAction }: OrHeroProps) => {
  return (
    <div className="bg-cover bg-center bg-[url('/images/city-hero.jpg')] w-full h-screen flex justify-center items-center px-10 md:px-28">
      <div className="text-center space-y-5 w-full max-w-4xl">
        <h1 className="text-white text-5xl">
          A Powerfull Influencer Marketing Platform for Advertisers
        </h1>
        <AtButton theme="primary" className="uppercase" onClick={callToAction}>
          Start your free trial
        </AtButton>
      </div>
    </div>
  )
}
