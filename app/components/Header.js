import Link from "next/link";
import Image from "next/image";
import React from 'react'
import { IoMdMenu } from "react-icons/io";


export const Header = () => {

    return (
        <>
            <nav>
                <div className='container pt-8'>
                    <div className='flex justify-between items-center'>
                        <div className='logo'>
                            <a href="/">Sonali</a>
                        </div>
                        <div className="dropdown-menu absolute top-[100px] left-0 bg-[#ffffff0e] lg:bg-black w-full flex flex-col  gap-6 items-center py-4 text-xl font-bold lg:text-[20px] lg:static lg:flex-row lg:justify-end">
                            <ul className='menuLink flex flex-col items-center gap-6 lg:flex-row lg:gap-10 2xl:gap-16'>
                                <li className="text-[#81f5e3] border-b-2 border-[#81f5e3] capitalize font-medium hover:text-[#81f5e3] transition-all">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="hover:border-b-2 hover:border-[#81f5e3] capitalize font-medium hover:text-[#81f5e3] transition-all">
                                    <Link href="/about">About</Link>
                                </li>
                                <li className="hover:border-b-2 hover:border-[#81f5e3] capitalize font-medium hover:text-[#81f5e3] transition-all">
                                    <Link href="/skill">Skill</Link>
                                </li>
                                <li className="hover:border-b-2 hover:border-[#81f5e3] capitalize font-medium hover:text-[#81f5e3] transition-all">
                                    <Link href="#">Projects</Link>
                                </li>
                                <li className="hover:border-b-2 hover:border-[#81f5e3] capitalize font-medium hover:text-[#81f5e3] transition-all">
                                    <Link href="#">Testimonials</Link>
                                </li>
                                <li className="hover:border-b-2 hover:border-[#81f5e3] capitalize font-medium hover:text-[#81f5e3] transition-all">
                                    <Link href="#">Contact</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="menu-button lg:hidden">
                            <Link className="" href="#">
                                <IoMdMenu size={40} />
                            </Link>

                        </div>

                    </div>
                </div>
            </nav>



            {/* 
            <script>
                const toggleBtn = document.querySelector(".menu-button");
                const dropdownMenu = document.querySelector(".dropdown-menu");

                    toggleBtn.addEventListener("click", () => {
                    dropdownMenu.classList.toggle('top-16');
             });
            </script> */}


        </>
    )
}




// rafc 
{/* <div className='flex gap-5'>
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
</div> */}
