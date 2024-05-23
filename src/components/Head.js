import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const[searchQuery,setSearchQuery]=useState("");
  const[suggestions,setSuggestions]=useState([]);
  const[showSuggestions,setshowSuggestions]=useState(false);
  const searchCache=useSelector((store)=>store.search);
  const dispatch=useDispatch();

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
          setSuggestions(searchCache[searchQuery]);
      }
      else
      getSearchSuggestions()},200)

    return()=>{
      clearTimeout(timer);
    }

  },[searchQuery]);

  const getSearchSuggestions=async ()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  }

   
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    };

  return (
    <div class="grid grid-flow-col p-3 m-2 shadow-lg h-18"  >
        <div class="flex col-span-5">
        <img 
        onClick={()=>toggleMenuHandler()}
        class="h-8 p-2 cursor-pointer"
         alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=="></img>
       <a href="/">
       <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"></img>
       </a>
        </div>
        <div class="col-span-10">
            <input 
             class="w-1/2 border border-gray-500 rounded-l-full px-5" type="text"
             value={searchQuery}
             onChange={(e)=>setSearchQuery(e.target.value)} onFocus={()=>setshowSuggestions(true)} onBlur={()=>setshowSuggestions(false)}>
              
             </input>
            <button class=" h-auto border border-gray-500 rounded-r-full w-20 bg-gray-100">Search</button>
            {showSuggestions&&(
            <div class="fixed bg-white py-2 px-2 w-[29.4rem]  rounded-lg shadow-2xl border-gray-100">
          <ul>
            {suggestions.map((s)=>(  <li key={s} className='hover:bg-gray-100'>{s}</li>))}
         </ul>
        </div>
        )}
        </div>
        
        <div class="col-span-1">
            <img className='h-8' alt="usericon" src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"></img>
        </div>
        
    </div>
  )
}

export default Head;