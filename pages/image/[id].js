import Head from 'next/head'
import Image from 'next/image';
import Axios from "axios";

import { useRouter } from 'next/router'

const Home = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Wallpapers | Eliseo Martelli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wallpaper data={props.data} />
    </>
  )
}

const Wallpaper = ({ data }) => (
  <>
    <div className='flex flex-col w-full shadow-lg bg-white'>
      <div className='relative w-full h-96'>
        <Image src={data.preview} layout="fill" objectFit='cover' />
      </div>
      <div className='p-4'>
        <h2 className='text-lg font-bold'>{data.title}</h2>
        <p>{data.location}</p>
      </div>
    </div>
    <div className='grid grid-cols-2 gap-4'>
      {data.urls.map((e) => <Button {...e} />)}
    </div>
  </>
)

const Button = ({ name, url }) => (
  <a download href={url} className='bg-green-800 text-white p-4 rounded-sm shadow-sm hover:shadow-lg hover:bg-green-700'>Download {name}</a>
)

export default Home;

export const getServerSideProps = async ({ params }) => {
  const { data } = await Axios.get(`https://raw.githubusercontent.com/eliseomartelli/wallpapers-data/main/data/${params.id}/info.json`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}