import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { addHistory, deleteVideo } from '../services/allApis';
import { toast } from 'react-toastify';
function VideoCard({video,setDel,cat}) {
    const [show, setShow] = useState(false);
    const [his,setHis]=useState({
      caption:video.caption,url:video.url,datetime:{}
    })
    const handleClose=()=>{
      setShow(false)
      addHistory(his)
      
    }
    const handleShow = () =>{
      setShow(true);
      setHis({...his, datetime:new Date()})
    }

    const handleDelete = async (id)=>{
      const res = await deleteVideo(id)
      if(res.status>=200 && res.status < 300){
        toast.success("deleted")
        setDel("success")
      }else{
        toast.error("failed")
      }
    }
   const handleDrag=(e,id)=>{
   console.log("Video ID:"+id)
    e.dataTransfer.setData("videoId",id)
   }
   
  return (
    <>
     <Card style={cat?{ width: '11rem', height:"20rem"}:{ width: '18rem',height:"27rem" }} draggable onDragStart={(e)=>{handleDrag(e,video?.id)}}>
      <Card.Img onClick={handleShow} variant="top" src={video.image} />
      <Card.Body>
        <Card.Title className='text-dark'>{video.caption}
        {
          !cat && 
          <Button className='btn float-end' onClick={()=>{handleDelete(video.id)}}>
          <i className='fa-solid fa-trash' style={{color:"red"}}></i>
         </Button>
        }
      
        </Card.Title>
        
      </Card.Body>
    </Card>
    <Modal fullscreen={true}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
    <Modal.Header closeButton>
          <Modal.Title>{video.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="97%" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>

  )
}

export default VideoCard