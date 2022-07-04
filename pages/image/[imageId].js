import Head from 'next/head'
import Axios from "axios";

import { useRouter } from 'next/router'

import WallpaperCard from '../../components/WallpaperCard';
import useSWR from 'swr';
import WallpaperCardShim from '../../components/WallpaperCardShim';

const Home = () => {
  const router = useRouter();
  const { imageId } = router.query;
  const address = `https://raw.githubusercontent.com/eliseomartelli/wallpapers-data/main/data/${imageId}/info.json`
  const fetcher = async (url) => await Axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) return (
    <>
      <Head>
        <title>Error | Eliseo Martelli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Error loading page. Try later.</p>
    </>
  )

  return (
    <>
      <Head>
        {!data ?
          <title>Wallpapers | Eliseo Martelli</title>
          :
          <title>{data.title} | Eliseo Martelli</title>
        }
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data ?
        <Wallpaper data={data} />
        : <div className='w-full sm:w-1/2'><WallpaperCardShim /></div>
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
  <a download href={url} className='bg-slate-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-slate-700 text-center'>Download {name}</a>
)

export default Home;
