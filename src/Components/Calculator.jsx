import React from 'react'
import calculatorimg from '../assets/calculator.png'

const Calculator = () => {
  return (
     <div className='w-[250px] h-fit justify-self-center bg-[#93a393]  rounded-md  text-black p-5 '>
                    <h1 className='my-5 text-center font-bold  text-[20px]'>Mini Basic Calculator</h1>
                    <img src={calculatorimg} alt="" className='h-[140px] justify-self-center' />
                    <h3 className='mt-3 text-[15px] '>A modern banking app with authentication,balance management  and transaction features</h3>
                    <h3 className='font-bold'>Tech  Stack: </h3>
                    <h3>Tailwind css,React,Redux toolkit</h3>
        
                    <h3 className='font-bold'>Features:</h3>
                    <ul  className='list-disc ml-4'>
                    <li>User authentication(Sign up, Sign In , Logout)</li>
                        <li> Add and withdraw balance</li>
                        <li> Transaction History</li>
                        <li> Responsive Design</li>
                    </ul>
                    
                    <h3  className='mt-5 font-bold text-[10px]'>Live Demo : safepay-8ghw.vercel.app  <link rel="stylesheet" href="safepay-8ghw.vercel.app" /></h3>
                    
                    <h3 className='font-bold text-[10px]'>Github Repository: <span><link rel="stylesheet" href="safepay-8ghw.vercel.app" />safepay-8ghw.vercel.app</span></h3>
                </div>
  )
}

export default Calculator
