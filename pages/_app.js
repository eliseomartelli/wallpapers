import '../styles/globals.css'
import logo from '../public/logo.svg'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return <div className='flex flex-col gap-4'>
    <header className='grow shadow-lg flex gap-2 p-2 font-bold'>
      <Image src={logo} width={16} height={16} />
      <p>Wallpapers</p>
    </header>
    <main className='flex grow w-full max-w-5xl self-center flex-col gap-4 px-4'>
      <Component {...pageProps} />
    </main>
  </div >
}

export default MyApp
