import Head from "next/head";
import Axios from "axios";

import { useRouter } from "next/router";

import WallpaperCard from "../../components/WallpaperCard";
import useSWR from "swr";
import WallpaperCardShim from "../../components/WallpaperCardShim";
import Error from "../../components/Error";

const Home = () => {
  const router = useRouter();
  const { imageId } = router.query;
  const address = `https://raw.githubusercontent.com/eliseomartelli/wallpapers-data/main/data/${imageId}/info.json`;
  const fetcher = async (url) => await Axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  console.log(error);
  if (error)
    return (
      <>
        <Head>
          <title>Error | Eliseo Martelli</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Error message={error.response.data} />
      </>
    );

  return (
    <>
      <Head>
        {!data ? (
          <title>Wallpapers | Eliseo Martelli</title>
        ) : (
          <title>{data.title} | Eliseo Martelli</title>
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data ? (
        <Wallpaper data={data} />
      ) : (
        <div className="w-full sm:w-1/2">
          <WallpaperCardShim />
        </div>
      )}
    </>
  );
};

const Wallpaper = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <WallpaperCard {...data} />
    <div className="grid grid-cols-2 sm:grid-cols-2 auto-rows-min gap-4">
      {data.urls.map((e, i) => (
        <Button {...e} key={i} />
      ))}
    </div>
  </div>
);

const Button = ({ name, url }) => (
  <a
    download
    href={url}
    className="bg-slate-800 text-white p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-slate-700 flex gap-4"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
    <span>Download {name}</span>
  </a>
);

export default Home;
