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

   
     <div className='grid lg:grid-cols-3 md-grid-cols-2  grid-cols-1 gap-5 '>
     <Safepay/>
     <Safehaven/>
     <Shopping/>
     <Cpap/>
     <Runo/>
     <Recipe/>
     <Calculator/>
      
      <Weather/>
       

         
    
     </div>
     <h3 className='justify-self-end mt-5 text-[blue] cursor-pointer'>View more</h3>
      
    </div>
  )
}

export default Portfolio
