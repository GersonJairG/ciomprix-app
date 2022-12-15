import Link from 'next/link'
import Image from 'next/image'

import { Layout } from 'components/templates'
import notFoundSvg from '/public/images/404.svg'

export default function NotFoundPage() {
  return (
    <>
      <Layout withoutHeader withoutFooter>
        {/* <Seo templateTitle='Not Found' /> */}
        <main className="h-screen flex justify-center items-center bg-gray-100">
          <section>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <Image sizes='default' alt="404-img" src={notFoundSvg} fill />
              </div>
              <h1 className={`mt-8 font-bold text-4xl md:text-6xl`}>Page not found</h1>
              <Link
                href="/"
                className={`text-lg underline underline-offset-2 hover:text-pink-600 text-pink-400 inline-flex items-center rounded-full py-2 px-4 font-normal xl:px-5`}
              >
                Back to home
              </Link>
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}
