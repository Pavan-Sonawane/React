import React from 'react'
import { Link , Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <nav>
        <Link to="/"> Home</Link><br/>
        <Link to="/about"> About</Link>
        </nav>
        <Outlet/>
    </>
  )
}
export default Layout