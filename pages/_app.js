import "../styles/globals.css";
import logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col gap-4">
      <header className="grow shadow-lg 2 p-4 font-bold flex justify-center">
        <div className="max-w-5xl grow px-4">
          <Link href="/" passHref>
            <a>
              <div className="flex gap-4 select-none cursor-pointer">
                <Image src={logo} width={24} height={24} />
                <p>Wallpapers</p>
              </div>
            </a>
          </Link>
        </div>
      </header>
      <main className="flex flex-1 w-full max-w-5xl self-center flex-col gap-4 px-4 min-h-screen">
        <Component {...pageProps} />
      </main>
      <footer className="flex justify-center bg-gray-100">
        <p className="w-full max-w-5xl p-4">
          © {new Date().getFullYear()} Eliseo Martelli
        </p>
      </footer>
    </div>
  );
}

export default MyApp;
