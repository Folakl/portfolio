import React from 'react'

const Navbar = () => {
  return (
    <div className='font-bold text-white bg-[#16328f]  h-[50px] p-5 flex justify-between items-center '>
      
    <div>
      <h3 className='text-2xl ' >Royam</h3>
    </div>
    <div>
      <ul className='flex justify-between gap-10   '>
          <li className='hover:text-[#5a5b63]'>Home</li>
          <li className='hover:text-[grey]'>Skill</li>
          <li className='hover:text-[grey]'>About</li>
          <li className='hover:text-[grey]'>Projects</li>
          <li className='hover:text-[grey]'> Contact</li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar

