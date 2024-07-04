import React from 'react'
import Image from "next/image";

const skill = () => {
    return (
        <>
            <section>
                <div>
                    <div className='grid sm:grid-cols-3 md:grid-cols-4 gap-8 items-center  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                        <div className='justify-center item-center mt-4 md:mt-0 text-left flex flex-col h-full'>
                            <Image className='rounded-full' height={700} width={700} src={9} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default skill