import React from 'react'
import { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory } from '../services/allApis';
import CategoryList from './CategoryList';

function Categories() {
  const [show, setShow] = useState(false);
 const [category,setCategory]=useState('')
const[addStatus,setAddStaus]=useState({})

 const getData=(val)=>{
  if(val){
    setCategory(val)
  }
 }

 const handleSubmit=async()=>{
  if(!category){
    toast.info("Enter valid info")
  }else{
    console.log(category)
    const data={name:category,video:[]}
    const res=await addCategory(data)
    if(res.status>=200 && res.status < 300){
      toast.success("Category added")
      setCategory("")
      setAddStaus(res.data)
      handleClose()
    }else{
      toast.error("Category adding failed")
    }
  }
 }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  <>
  <div className='d-grid'>
   <Button variant='info' onClick={handleShow}>
   Add Category
   </Button>
  </div>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Category</Form.Label>
        <Form.Control onChange={(e)=>{getData(e.target.value)}} type="text" placeholder="" name='category' />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} >
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
      <CategoryList add={addStatus}/>
  </>
  )
}

export default Categories