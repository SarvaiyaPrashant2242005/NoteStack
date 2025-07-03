import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const styles = 'flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full';
    const getStyle = ({ isActive }) => {
        return isActive ? `bg-indigo-800 text-slate-50 ${styles}`
        : `hover:bg-indigo-800 hover:text-slate-50 ${styles}`
    }

    return (
        <aside className='flex flex-col gap-4 border-r-2 border-gray-200 w-48 h-screen p-4'>
            <NavLink to="/" className={({ isActive }) => getStyle({ isActive })}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                </svg>
                <span>Home</span>
            </NavLink>
            <NavLink to="/archive" className={({ isActive }) => getStyle({ isActive })}>
                <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
                </svg>
                <span>Archive</span>
            </NavLink>
            <NavLink to="/important" className={({ isActive }) => getStyle({ isActive })}>
                <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
                <span>Important</span>
            </NavLink>
            <NavLink to="/bin" className={({ isActive }) => getStyle({ isActive })}>
                <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                </svg>
                <span>Bin</span>
            </NavLink>
        </aside>
    )
}

export default Sidebar
