import React from 'react'
import logo from '../../images/logo.png'
const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>4
    <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <img src={logo} alt="logo" className='w-32' />
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full '>
          {['Market','Exchange','Tutorials','Wallets'].map((item,idx)=>(
            <p key={idx} className="text-white text-base text-center mx-2 cursor-pointer">
              {item}
            </p>
          ))}
        </div>
    </div>
    <div className='flex justify-center items-center flex-col mt-5'>
          {['Come join us','guptapriyansh23@gmail.com'].map((item,idx)=>(
            <p className='text-white text-sm text-center' key={idx}>
              {item}
            </p>
          ))}
    </div>
    <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/>
    <div className='sm:w-[90%] w-full flex justify-between items-center mt-3 '>
            {['@kryptomastery 2022','All rights reserved'].map((item,idx)=>(
              <p className='text-white text-sm text-center'>
                {item}
              </p>
            ))}
    </div>
    </div>
  )
}

export default Footer