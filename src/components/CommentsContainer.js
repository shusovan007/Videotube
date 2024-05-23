import React from 'react'

const commentsData=[
    {
        name:"asfasf",
        text:"Lorem ip",
        replies:[{
            name:"asfasf",
            text:"Lorem ip",
            replies:[{
                name:"asfasf",
                text:"Lorem ip",
                replies:[{
                    name:"asfasf",
                    text:"Lorem ip",
                    replies:[]
                },
                {
                    name:"asfasf",
                    text:"Lorem ip",
                    replies:[]
                },
                {
                    name:"asfasf",
                    text:"Lorem ip",
                    replies:[]
                }]
            },
            {
                name:"asfasf",
                text:"Lorem ip",
                replies:[]
            },
            {
                name:"asfasf",
                text:"Lorem ip",
                replies:[]
            }]
        },
        {
            name:"asfasf",
            text:"Lorem ip",
            replies:[]
        },
        {
            name:"asfasf",
            text:"Lorem ip",
            replies:[]
        },
        {
            name:"asfasf",
            text:"Lorem ip",
            replies:[]
        },]
    },
    {
        name:"asfasf",
        text:"Lorem ip",
        replies:[]
    },
    {
        name:"asfasf",
        text:"Lorem ip",
        replies:[]
    },
    {
        name:"asfasf",
        text:"Lorem ip",
        replies:[]
    },
];

const Comment=({data})=>{
        const {name,text,replies}=data;
        return(
            <div class='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
                <img className='w-12 h-12'
                alt="user"
                src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"></img>
                <div className='px-3'>
                    <p className='font-bold'>{name}</p>
                    <p>{text}</p>
                </div>
            </div>
        )
}
const CommentsList=({comments})=>{
return comments.map((comment,index)=>(
    <div>
            <Comment key={index} data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies}/>
            </div>
            </div>
))


}

const CommentsContainer = () => {
  return (
    <div className='p-2 m-5'>
    <h1 className='text-2xl font-bold'>Comments: </h1>
    <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;