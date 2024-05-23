import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center'>
       <img className='h-8 p-1' alt="usericon" src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"></img>
            <span className='p-1 mx-1 font-bold'>{name}</span>
            <span>{message}</span>
        </div>
  )
}

export default ChatMessage