import Axios from "axios";
import WallpaperCard from "../components/WallpaperCard";
import Link from "next/link";
import Head from "next/head";
import WallpaperCardShim from "../components/WallpaperCardShim";
import useSWR from "swr";

const Index = () => {
  const address =
    "https://raw.githubusercontent.com/eliseomartelli/wallpapers-data/main/index.json";
  const fetcher = async (url) => await Axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error)
    return (
      <>
        <Head>
          <title>Error | Eliseo Martelli</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <p>Error loading page. Try later.</p>
      </>
    );

  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
      <Head>
        <title>Wallpapers | Eliseo Martelli</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!data ? <ShimPage /> : <PostList data={data} />}
    </div>
  );
};

const PostList = (props) => (
  <>
    {props.data.map((e, i) => {
      console.log(e);
      return (
        <Link
          href={"/image/" + e.reference}
          key={i}
          className="cursor-pointer"
          passHref
        >
          <a className="flex">
            <WallpaperCard {...e} />
          </a>
        </Link>
      );
    })}
  </>
);

const ShimPage = () => (
  <>
    {new Array(5).fill(false).map((_, i) => (
      <WallpaperCardShim key={i} />
    ))}
  </>
);

export default Index;
