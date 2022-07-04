import '../styles/globals.css'
import logo from '../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return <div className='flex flex-col gap-4'>
    <header className='grow shadow-lg 2 p-4 font-bold'>
      <Link href="/" passHref>
        <a>
          <div className='flex gap-4 select-none cursor-pointer'>
            <Image src={logo} width={24} height={24} />
            <p>Wallpapers</p>
          </div>
        </a>
      </Link>
    </header>
    <main className='flex grow w-full max-w-5xl self-center flex-col gap-4 px-4'>
      <Component {...pageProps} />
    </main>
  </div >
}

export default MyApp
