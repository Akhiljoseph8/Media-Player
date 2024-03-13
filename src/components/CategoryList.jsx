import React, { useEffect, useState } from 'react'
import { deleteCategory, getCategory, getSpecificVideo, updateCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'

function CategoryList({add}) {
    const [cat,setCat]=useState([])
    const[catDel,setCatDel]=useState('')
    useEffect(() => {
     getData()
    }, [add,catDel])
     const getData=async()=>{
        const res= await getCategory()
        setCat(res.data)
       
     }
     const handleDelete=async(id)=>{
        const res= await deleteCategory(id)
        if(res.status>=200 && res.status < 300){
            toast.success("Category deleted")
             setCatDel(res.data)
          }else{
            toast.error("failed")
          }
     }
     const handleDragOver=(e)=>{
      e.preventDefault()
      console.log("drag over...")
     }
     const handleDrop=async(e,id)=>{
       console.log("category id:",id)
       const vid=e.dataTransfer.getData("videoId")
       console.log("droped video id:",+vid)
       const category=cat.find(item=>item.id==id)
       console.log(category)
       const video=await getSpecificVideo(vid)
       console.log(video.data)
       category.video.push(video.data)
       console.log(category)
       const res=await updateCategory(category,id)
       if(res.status>=200 && res.status < 300){
        toast.success(`${video.data.caption} added to ${category.name}`)
        getData()
      }else{
        toast.error("failed")
      }
     }
  return (
    <>
   <div className='mt-3 border shadow p-2'>
    {
    cat.length>0?
    cat.map(item=>(
        <div className='card shadow my-3 p-4' onDragOver={e=>{handleDragOver(e)}} onDrop={e=>{handleDrop(e,item.id)}}>
          <div>
            <span>{item.name}
            <i className='fa-solid fa-trash float-end' style={{color:"#000000"}} onClick={()=>{handleDelete(item.id)}}></i>
            </span>
          </div>
          <div className='mt-3'>
            {
              item?.video.map(v=>(
                <VideoCard video={v} cat={true}/>
              ))
            }
          </div>
        </div>
    ))
    :
    <h3>No Categories</h3>
}
   </div>
   </>
  )
 
}

export default CategoryList