import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandommessage } from '../utils/helper';


const LiveChat = () => {
  const[liveMessage,setLiveMessage]=useState("")
const dispatch=useDispatch();
const chatMessages=useSelector((store)=>store.chat.messages);

useEffect(()=>{
 const i= setInterval(()=>{

dispatch(addMessage({
  name:generateRandomName(),
  message:makeRandommessage(20)+"💯💯",
}))

  },1300);

  return ()=>clearInterval(i);
},[])

  return (
    <>
 <div className='w-full h-[480px] ml-2 my-5 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
  <div>
    {
    chatMessages.map((c,i)=><ChatMessage 
   key={i}
   name={c.name}
    message={c.message}
    />)
    }
    </div>
    
    </div>
    <form className='w-full ml-2 p-2 border border-black' onSubmit={(e)=>{e.preventDefault()
      dispatch(addMessage({
        name:"Shusovan",
        message:liveMessage
      }))
      setLiveMessage("")
    }}>
    <input className='w-96 mx-4 px-2 border border-green-700' type='txt' value={liveMessage} onChange={(e)=>{
      setLiveMessage(e.target.value);
    }}/>
    <button className='px-2 mx-2 bg-green-100'>Send</button>
  </form>
  </>
    
  )
}

export default LiveChat