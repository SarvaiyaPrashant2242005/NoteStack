import React from 'react'

const Navbar = () => {
  return (
    <header className="flex items-center px-3 py-1 gap-3 border-b-4 border-gray-100">
      <div className='flex-shrink-0'>
        <img className='w-12 h-12' src='https://i.pinimg.com/1200x/9c/e5/23/9ce523a9f93bf0c1e6fffa4fcb3d1c9f.jpg' alt="Logo" />
      </div>
      <h1 className='text-emerald-800 text-2xl font-bold'>NoteStack</h1>
    </header>
  )
}

export default Navbar
