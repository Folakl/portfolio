import React from 'react'

const Navbar = () => {
  return (
    <div className='font-bold text-white bg-[#16328f] grid  grid-cols-2 h-[100px] p-5'>
      
    <div>
      <h3 className='text-2xl ' >  Yakub Roimot Omotara</h3>
    </div>
    <div>
      <ul className='grid lg:grid-cols-5 md:geid-cols-4 grid-cols-2'>
          <button className='hover:text-[#5a5b63]'>Home</button>
          <button className='hover:text-[grey]'>Skill</button>
          <button className='hover:text-[grey]'>About</button>
          <button className='hover:text-[grey]'>Projects</button>
          <button className='hover:text-[grey]'> Contact</button>
      </ul>
    </div>
  </div>
  )
}

export default Navbar

