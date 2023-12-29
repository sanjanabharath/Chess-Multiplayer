import React from 'react'
import Login from './Login'
const Home = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='w-4/12 p-6 m-36 bg-white rounded h-auto'>
          <div className='flex items-center justify-center'>
          <button className='hover:bg-slate-200 active:bg-violet-700 active:text-white rounded px-16 py-2 text-xl mt-3 font-medium'>Login</button>
          <button className='hover:bg-slate-200 active:bg-violet-700 active:text-white rounded px-16 py-2 text-xl mt-3 font-medium'>Sign Up</button>
          </div>
          
          <Login/>
        </div>

        
    </div>
  )
}

export default Home