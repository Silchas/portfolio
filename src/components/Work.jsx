import React from 'react'
import landingpage from '../assets/projects/landingpage.png'
import movify from '../assets/projects/movify.png'
import summerstore2 from '../assets/projects/summerstore2.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-orange-600'>Work</p>
                <p className='py-6'>Some of my recent work</p>
            </div>

            <div  className='grid sm:grid-cols-2 md:grid-cols3 gap-4'>
                <div style={{backgroundImage: `url(${movify})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:bg-red-700'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${landingpage})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work