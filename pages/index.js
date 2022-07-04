import Axios from "axios";
import WallpaperCard from "../components/WallpaperCard";
import Link from "next/link";
import Head from "next/head";

const Index = (props) => {
    console.log(props.data)
    return (
        <div className="grid grid-cols-2 gap-4">
            <Head>
                <title>Wallpapers | Eliseo Martelli</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {props.data.map((e, i) => {
                console.log(e)
                return (
                    <Link href={"/image/" + e.reference} key={i} className="cursor-pointer" passHref>
                        <a className="flex">
                            <WallpaperCard {...e} />
                        </a>
                    </Link>
                )
            })
            }
        </div >

    )
}

export default Index

export const getServerSideProps = async () => {
    const { data } = await Axios.get(`https://raw.githubusercontent.com/eliseomartelli/wallpapers-data/main/index.json`);

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