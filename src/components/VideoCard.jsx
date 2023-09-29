import React from 'react'

const VideoCard = ({info}) => {
  const {snippet,statistics} = info;
  const {channelTitle,title,thumbnails} = snippet;
  console.log(info)
  return (
    <div className=' m-2 shadow-xl w-64 rounded-xl p-2 self-center'>
        <img src={info.snippet.thumbnails.medium.url} alt={title} className='rounded-lg'/>
        <ul>
          <li className='font-bold'>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount}</li>
        </ul>
    </div>
  )
}

export default VideoCard


 export const AdditionalVideoCard = ({info}) =>{
  const {snippet,statistics} = info;
  const {channelTitle,title,thumbnails} = snippet;
  return(
    <div className=' m-2 shadow-xl w-64 rounded-xl p-2 self-center border-2 border-red-800'>
      <img src={info.snippet.thumbnails.medium.url} alt={title} className='rounded-lg'/>
        <ul>
          <li className='font-bold'>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount}</li>
        </ul>
        <p>This is a add component</p>
    </div>
  );
}