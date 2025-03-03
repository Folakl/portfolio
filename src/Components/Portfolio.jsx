import React from 'react';
import Safepay from './Safepay';
import Recipe from './Recipe';
import Calculator from './Calculator';
import Runo from './Runo';
import Shopping from './Shopping';
import Weather from './Weather';
import Cpap from './Cpap';
import Safehaven from './Safehaven';

const Portfolio = () => {
  return (
    <div className=' m-10 '>
      <h3 className='text-[30px] font-bold  text-center'>Portfolio</h3>
      <h3 className='text-[20px] text-center my-5 '>Check out some of my work below </h3>

   
     <div className='grid grid-cols-3 gap-5'>
     <Safepay/>
     <Recipe/>
     <Calculator/>
      <Runo/>
      <Shopping/>
      <Weather/>
      <Cpap/> 
      <Safehaven/>
      < Safepay/>    
    
     </div>
      
    </div>
  )
}

export default Portfolio
