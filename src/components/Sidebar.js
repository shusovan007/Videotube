import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
    if(!isMenuOpen)
        return null;
    return (
    <div class='p-5 shadow-lg w-48'>
         <ul class="font-bold">
            <li class='p-2'><Link to="/">🏠Home</Link></li>
            <li class='p-2'>🔖Shorts</li>
            <li class='p-2'>📑History</li>
            <li class='p-2'>⌚Watch Later</li>
            
        </ul>
        <h1 class="font-bold pt-5">
            Subsciptions
        </h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            
        </ul>
        <h1 class="font-bold pt-5">
           Watch Later
        </h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            
        </ul>
        <h1 class="font-bold">
            Subsciptions
        </h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
            
        </ul>
    </div>
  )
}

export default Sidebar;