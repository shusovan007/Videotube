import React from 'react'
import Sidebar from './Sidebar'
import MainComponent from './MainComponent'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex">
        <Sidebar className="grid grid-flow-col"></Sidebar>
        <Outlet/>
    </div>
  )
}

export default Body