import Head from "next/head";
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
import Login from "./login";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import CustomizedProgressBars from "@/components/LinearProgress";
import Search from "@/components/Search";

export default function Home() {
  return (
    <>
      <Head>
        <title>Standout Specialities</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section className="pl-[10rem] bg-black bg-firstSectionImage bg-contain bg-no-repeat bg-right">
          <div className="pt-[7.69rem] pb-[9.63rem] ">
            <h1 className="w-[55%] text-mainHeading text-white uppercase font-normal tracking-tighter font-heading tracking-headingSpace">
              Wheel and Tire Packages
            </h1>
            <Image
              className="w-[21%] h-[2.4rem] mt-[2rem]"
              src="/images/line.svg"
              alt=""
              width={100}
              height={100}
            />
            <p className="mt-[1.19rem] text-white text-homeSubHeading font-normal font-Inter">
              $100 Off Wheel & Tire Packages when Picked up locally
            </p>
            <div className="mt-[6rem] text-white">
              <button className="text-homeButtonText uppercase font-bold py-[12px] px-[2.28%] bg-[#F23939] mr-[1rem] rounded-[2.5px]">
                search wheels by vehicle
              </button>
              <button className="text-homeButtonText uppercase font-bold py-[12px] px-[2.28%] bg-[#F23939] rounded-[2.5px]">
                search wheels by size and brand
              </button>
            </div>
          </div>
        </section>
        <section className="mt-[-4.375rem] absolute w-full">
          <Search />
        </section>
        <section className="pl-[10rem] bg-secondSectionImage bg-cover">
          <div className="pt-[15.25rem] pb-[6.56rem]">
            <p className="text-secondContainerHeading uppercase font-normal">
              Check out{" "}
              <strong className="text-secondContainerHeading text-[#F23939]">
                our selection
              </strong>
            </p>
            <div className="w-[40%] mt-[1rem] ml-[2.5%] float-left">
              <div className="w-[80%]">
                <CustomizedProgressBars />
              </div>
            </div>

            <div className="mt-[6.19rem] font-heading tracking-headingSpace not-italic">
              <h1 className="text-mainHeading uppercase text-black font-normal">
                Lift
              </h1>
              <h1 className="text-mainHeading uppercase text-[#F23939] font-normal">
                Leveling
              </h1>
              <h1 className="text-mainHeading uppercase text-black font-normal">
                Kits
              </h1>
            </div>
            <button className="text-white mt-[1rem] text-homeButtonText uppercase font-bold py-[12px] px-[2.28%] bg-[#F23939] rounded-[2.5px]">
              shop all suspensions kits
            </button>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
