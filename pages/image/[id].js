import Head from 'next/head'
import Axios from "axios";

import { useRouter } from 'next/router'

import WallpaperCard from '../../components/WallpaperCard';

const Home = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Wallpapers | Eliseo Martelli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!props.notFound ?
        <Wallpaper data={props.data} />
        : <>Not found</>
      }
    </>
  )
}

const Wallpaper = ({ data }) => (
  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
    <WallpaperCard {...data} />
    <div className='grid grid-cols-2 sm:grid-cols-2 auto-rows-min gap-4'>
      {data.urls.map((e, i) => <Button {...e} key={i} />)}
    </div>
  </div>
)


const Button = ({ name, url }) => (
  <a download href={url} className='bg-green-800 text-white p-4 rounded-sm shadow-sm hover:shadow-lg hover:bg-green-700 text-center'>Download {name}</a>
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