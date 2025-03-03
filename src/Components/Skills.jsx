import React from 'react'

const Skills = () => {
  return (
    <div className='text-center m-5'>
      <h3 className='font-bold text-[30px]'>My Skills</h3>

    <div className='grid grid-cols-2 justify-self-center gap-5'>
    <div className='w-[300px] h-[150px]  bg-[#16328f] text-black justify-self-center  rounded-md mt-10 p-8'>
        <h3 className='font-bold' >Frontend Development</h3>
        <h3 className='text-white pt-5'>Html, Css,Tailwind Css, Javascript, React,Redux Toolkit</h3>
      </div>
      <div className='w-[300px] h-[150px] bg-[#16328f] text-black justify-self-center  rounded-md mt-10 p-8'>
        <h3 className='font-bold'>Graphic Designing</h3>
        <h3 className='text-white pt-5'>Canva</h3>
      </div>
    </div>
    </div>
  )
}

export default Skills

