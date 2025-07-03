import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <main>
            <Sidebar/>
        </main>
    </div>
  )
}

export default Home