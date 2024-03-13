import { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { uploadVideo } from '../services/allApis';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
 

function AddVideo({setRes}) {
    const [show, setShow]=useState(false)
    const [video,setVideo]=useState(
      {caption:'',url:'',image:''}
    )

    const getData=(e)=>{
      const {name,value}=e.target
      if(name=="caption"){
        setVideo({...video,caption:value})
      }
      if(name=="url"){
        // setVideo({...video,url:value})
        const url=value
        const furl=url.split("v=")
        console.log(furl)
        const videourl=`https://www.youtube.com/embed/${furl[1]}?si=GR3Nx0yX-PDtjVsB&autoplay=1`
        // console.log(videourl)
        setVideo({...video,url:videourl})
      }
      if(name=="image"){
        setVideo({...video,image:value})
      }
    }
    const handleAddVideo=async ()=>{
      const {caption,image,url}=video
      if(!caption || !image || !url){
        toast.error("Enter valid data!!")
      }else{
        console.log(video)
        const res =await uploadVideo(video)
        console.log(res)
        if(res.status>=200 && res.status<300){
          setRes("success")
          toast.success("Successful")
          handleClose()
        }else{
          toast.error("failed")
        }
      }
    }
    const handleClose=()=> setShow(false)
    const handleShow=()=> setShow(true)
  return (
    <div>
        <span className='btn' onClick={handleShow}>
          <i className='fa-solid fa-circle-plus fa-lg p-1'></i>
          Add Video
        </span>
        <span className='btn'>
           <Link to={'/his'} style={{color:'white', textDecoration:'none'}}><i className="fa-solid fa-clock-rotate-left p-1"></i>
           Watch History</Link>
        </span>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='mt-3'>
               <FormControl onChange={(e)=>{getData(e)}} name='caption' size='sm' type='text' placeholder='Caption'/>
            </div>
            <div className='mt-3'>
               <FormControl onChange={(e)=>{getData(e)}} name='image' size='sm' type='text' placeholder='Image URL'/>
            </div>
            <div className='mt-3'>
               <FormControl onChange={(e)=>{getData(e)}} name='url' size='sm' type='text' placeholder='Video URL'/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddVideo} variant="primary">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo
