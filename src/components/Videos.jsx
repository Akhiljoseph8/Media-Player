import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '../services/allApis'
function Videos({resStatus}) {
  const [videolist, setVideolist]=useState([])
  const [delStatus,setDelStatus]=useState("")
  useEffect(() => {
    getData()
    setDelStatus('')
  }, [resStatus,delStatus])
  
const getData=async()=>{
  const res=await getVideos()
  console.log(res)
  setVideolist(res.data)
}
  return (
    <div className='bg-light w-100 p-3 row'>
      {
        videolist ?
         videolist.map(item=>(
          <VideoCard video={item} setDel={setDelStatus} className="m-5"/>
         ))
         :
         <h3>No video</h3>
      }
      
    </div>
  )
}

export default Videos