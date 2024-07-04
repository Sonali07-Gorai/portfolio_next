import React from 'react'
import Image from "next/image";
import imge from "/public/Images/hero-image.png";


const About = () => {
  return (
    <>
      <section className=''>
        <div className='container'>
      
          <div className='md:grid md:grid-cols-2 gap-8 items-center  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>

            <div className='justify-center item-center mt-4 md:mt-0 text-left flex flex-col h-full'>

              <h2 className="text-5xl font-bold text-[#81f5e3] mb-4">About Me</h2>
              <p className="text-base lg:text-lg">
                {/* I am a  web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Node.js, MySQL,
                HTML, CSS, and Git. I am a quick learner and I am always
                looking to expand my knowledge and skill set. I am a team player and
                I am excited to work with others to create amazing applications. */}
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

            </div>
            <Image className='rounded-full' height={700} width={700} src={imge} alt='' />
            <div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About