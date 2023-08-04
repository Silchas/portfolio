import React from 'react'
import css from '../assets/css.png'
import Firebase from '../assets/Firebase.png'
import Github from '../assets/Github.png'
import HTML from '../assets/HTML.png'
import Javascript from '../assets/Javascript.png'
import Reactlogo from '../assets/Reactlogo.png'
import Tailwind from '../assets/Tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
        <p className='text-4xl py-4 font-bold inline border-b-4 border-orange-600'>Skills</p>
        <p className='py-4'>These are the technologies I have worked with</p>
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={css} alt='CSS icon' />
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Javascript} alt='Javascript icon' />
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Reactlogo} alt='React icon' />
          <p className='my-4'>REACT</p>
        </div>
        <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
          <p className='my-4'>TAILWIND</p>
        </div>
        <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Github} alt='Github icon' />
          <p className='my-4'>GITHUB</p>
        </div>
        <div className='shadow-md shadow-[040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Firebase} alt='Firebase icon' />
          <p className='my-4'>FIREBASE</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skills