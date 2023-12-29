import React from 'react'

const Login = () => {
  return (
    <div>
        <label class="block px-8 pt-8 pb-16 relative">
        <span class="block text-lg text-slate-700">Email</span>
        <input type="email" class="peer border-2 rounded px-2 w-96 mt-3 h-8"/>
        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
        Please provide a valid email address.
        </p>
        <span class="block text-lg text-slate-700">Password</span>
        <input type="password" class="peer border-2 rounded px-2 w-96 h-8 mt-3"/>
        <button className='hover:bg-slate-200 border-2  rounded px-8 py-2 text-lg mt-6 absolute bottom-0 right-32'>Cancel</button>
        <button className='hover:bg-slate-200 bg-violet-700 text-white rounded px-8 py-2 text-lg mt-6 absolute bottom-0 right-0'>Login</button>
  </label>
    </div>
  )
}

export default Login