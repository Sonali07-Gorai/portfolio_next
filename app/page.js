import About from "./about/page";

import Image from "next/image";
import Link from "next/link";
import imge from "../public/Images/hero-image.png";

import { IoMdDownload } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <main>
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>


          <div className='flex justify-center items-center'>

            <Image className='rounded-full' height={700} width={700} src={imge} alt='' />

          </div>
          <div className='font-bold leading-tight flex justify-center items-center'>
            <div className="text-box">
              <p className="text-[100px] sm:text-[120px]">I'm</p>
              <h3 className="text-[100px] sm:text-[140px] pb-2">Sonali</h3>
              <p className="pb-10 text-[20px]">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.<br /></p>
              <button class="text-[20px] font-semibold hover:font-bold px-10 py-4 captalize  border-solid border-2 border-[#81f5e3] hover:border-[black] hover:bg-[#81f5e3] duration-300 ese-in-out hover:text-black flex justify-center items-center gap-5">DOWNLOAD CV
                <Link className="" href="#">
                  <IoMdDownload className="w-[30px] h-[30px]" />
                </Link>
              </button>

              <div className="flex gap-5 py-5">

                <Link className="flex items-center rounded-full border-2 border-solid border-[#81f5e3] hover:bg-[#81f5e3] p-4" href="#">
                  <FaGithub className="w-[20px] h-[20px] hover:text-black" />
                </Link>

                <Link className="flex items-center rounded-full border-2 border-solid border-[#81f5e3] hover:bg-[#81f5e3] p-4" href="#">
                  <RiLinkedinFill className="w-[20px] h-[20px] hover:text-black" />
                </Link>

                <Link className="flex items-center rounded-full border-2 border-solid border-[#81f5e3] hover:bg-[#81f5e3] p-4" href="#">
                  <FaFacebookF className="w-[20px] h-[20px] hover:text-black" />
                </Link>

                <Link className="flex items-center rounded-full border-2 border-solid border-[#81f5e3] hover:bg-[#81f5e3] p-4" href="#">
                  <FaInstagram className="w-[20px] h-[20px] hover:text-black" />
                </Link>

              </div>
            </div>

          </div>

        

        </div>

      </main>
    </>

  );
}
