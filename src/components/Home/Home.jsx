import React from 'react'
import Cards from '../Cards/Cards'

const Home = () => {
  return (
    <>
   <div className='bg-[url("https://i.ibb.co/N98XCnb/banner.png")] h-[500px] w-full '>
        <div className='w-full h-full bg-[#ffffffc2] flex items-center justify-center'>
        <div>
        <h1 className='text-4xl font-bold text-center '>I Grow By Helping People In Need</h1>
        <div className='flex w-[470px] bg-white border mt-5 rounded-lg mx-auto'>
          <input type="text" className='w-full bg-transparent outline-none px-4' placeholder='Search here..'/>
          <button className='px-4 text-white rounded-r-lg bg-red-400 py-2'>Search</button>
        </div>
        </div>
        </div>
   </div>
   <div>
    <Cards/>
   </div>
    </>
  )
}

export default Home
