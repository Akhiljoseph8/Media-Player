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
    <Row className='mt-3 ' style={{justifyContent:"center"}}>
       <Col sm='4' md='2' lg='2'>
        <AddVideo setRes={setResStatus} />
       </Col>
       <Col sm='8' md='4' lg='6'>
        <Videos resStatus={resStatus} />
       </Col>
       <Col sm='8' md='3' >
        <Categories />
       </Col>
    </Row>
    <ToastContainer />
    </>
  )
}

export default Dashboard