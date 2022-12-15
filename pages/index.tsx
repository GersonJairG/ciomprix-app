import Link from 'next/link'

import { AtButton } from 'components/atoms'
import { MlCard } from 'components/molecules'
import { OrHero } from 'components/organisms'
import { Layout, Seo } from 'components/templates'
import { data as peopleData } from 'utils/people'

function startFreeTrial() {
  console.log('🥳 Starting your free trial...')
}

export default function Home() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <OrHero callToAction={startFreeTrial} />
        {/* Our Mission */}
        <section className="w-full px-10 py-16 md:px-28 md:py-28 justify-center flex">
          <div className="w-full text-center max-w-3xl">
            <h1 className="text-3xl text-neutral-700 mb-4">Our Mission</h1>
            <p className="text-neutral-500 font-medium">
              Founded in 2014, Achoo belleves that influencers including
              bloggers, are the best digital marketing channel. We help
              advertisers to engage and execute efficient influencer marketing
              strategies. Our digital platform with turnkey analytics and
              reporting features based on real-time influencer data provides
              advertisers overview and transparency into the vastly unstructured
              influencer market.
            </p>
          </div>
        </section>

        {/* Our People */}
        <section className="w-full px-10 py-16 md:px-28 md:py-20 justify-center flex bg-gray-100 flex-col items-center">
          <div className="w-full text-center max-w-xl">
            <h1 className="text-3xl text-neutral-700 mb-4">Our People</h1>
            <p className="text-neutral-500 font-medium mb-8">
              Behind Achoo is a dedicated team of digital marketing experts,
              client-focused relationship managers, data nerds and bloggers
              whose ambition is helping clients achieve awesome influencer
              marketing results.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:gap-x-8 lg:grid-cols-3">
            {peopleData.slice(0, 3).map((person) => (
              <MlCard key={person.id} {...person} />
            ))}
          </div>

          {peopleData.length > 3 && (
            <div className="mt-8 w-full max-w-5xl flex justify-center xl:justify-end">
              <Link href="/people">
                <span className="text-pink-500 hover:underline hover:underline-offset-2">
                  View more...
                </span>
              </Link>
            </div>
          )}
        </section>

        {/* banner */}
        <section className="w-full px-10 md:px-28 py-11 justify-center sm:justify-between flex bg-pink-400 items-center text-white flex-col lg:flex-row">
          <p className="w-full basis-2/3 text-center lg:text-start mb-8 lg:mb-0">
            No obligations or contracts. Achoo Influencer Platform is available
            to all advertisers
          </p>
          <AtButton
            theme="primary"
            className="uppercase"
            onClick={startFreeTrial}
          >
            Start your free trial
          </AtButton>
        </section>
      </main>
    </Layout>
  )
}
