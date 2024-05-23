import React from 'react'

const Videocard = ({info}) => {
    console.log(info);
    // const {snippet}=info.snippet;
    // const{channelTitle,title,thumbnails}=snippet;
  return (
    <div className='p-2 m-2 w-60 shadow-lg'>
        <img  className="rounded-lg" alt="thumbnail" src={info.snippet.thumbnails.medium.url}></img>
        <ul>
            <li className='font-bold py-2'>{info.snippet.title}</li>
            <li>{info.snippet.channelTitle}</li>
            <li>{info.snippet.publishedAt}</li>
        </ul>
      
    </div>
  )
}

export default Videocard