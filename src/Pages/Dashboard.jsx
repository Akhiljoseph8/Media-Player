import React from 'react'
import { Row, Col } from 'react-bootstrap'
import AddVideo from '../components/AddVideo'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import { ToastContainer } from 'react-toastify';
import { useState } from 'react'
  import 'react-toastify/dist/ReactToastify.css';
function Dashboard() {
  const [resStatus,setResStatus]=useState(" ")
  return (
    <>
    <h2>Dashboard</h2>
    <Row className='mt-3 p-5'>
       <Col sm='1' md='2'>
        <AddVideo setRes={setResStatus} />
       </Col>
       <Col sm='4' md='6'>
        <Videos resStatus={resStatus} />
       </Col>
       <Col sm='2' md='4'>
        <Categories />
       </Col>
    </Row>
    <ToastContainer />
    </>
  )
}

export default Dashboard