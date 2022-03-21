import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Todos from '../components/Todos'
import UserDetails from '../components/UserDetails'

const Home: NextPage = () => {

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>React Coding Challenge</title>
      </Head>
      <section className='max-w-5xl md:mx-auto text-3xl md:text-6xl font-extrabold'>
        <h1>
          Task Details
        </h1>
      </section>
      <main className='max-w-5xl md:mx-auto md:mt-10 md:border-2 flex md:justify-around md:gap-3 flex-col md:flex-row items-center p-3'>
        <div className='md:border-2 rounded-lg p-1 md:w-[50%] w-full'>
          <Todos />
        </div>
        <div className='md:border-2  rounded-lg p-1 w-full md:w-[50%]'>
          <UserDetails />
        </div>
      </main>
      <section className='max-w-5xl md:mx-auto text-3xl md:text-4xl font-bold my-10 p-1'>
        <h1>
          Check my other projects:
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3  transform transition-all duration-200 cursor-pointer  gap-3 font-medium text-3xl justify-around  p-3'>
          <h1 className='projects' onClick={() => router.push('https://oas.vercel.app/')}>
            Open Apple Store API:
          </h1>
          <h1 className='projects' onClick={() => router.push('https://twitter-m-2.vercel.app/')}>
            Twiter Clone:
          </h1>

          <h1 className='projects' onClick={() => router.push('https://twitch-tv-clone.vercel.app/')}>
            Twitch Clone:
          </h1>
          <h1 className='projects' onClick={() => router.push('https://oas.vercel.app/')}>
            Weather Application:
          </h1>
          {/* add this https://wakanda-tan.vercel.app/ */}
          <h1 className='projects' onClick={() => router.push('https://wakanda-tan.vercel.app/')}>
            Wakanda:
          </h1>
          <h1 className="projects" onClick={() => router.push('https://github.com/theabhayprajapati/Open-Apple-Store://oas.vercel.app/')}>
            Github
          </h1>
        </div>
      </section>
    </div>

  )
}

export default Home


