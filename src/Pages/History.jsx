import React, { useEffect, useState } from 'react'
import { allHistory, deleteHistory } from '../services/allApis'

function History() {
  const [history, setHistory]=useState([])
  const [delStatus,setDelStatus]=useState('')
  useEffect(()=>{
   getData()
   handleDeleteHistory()
  },[delStatus])

  const getData=async()=>{
    const res=await allHistory()
    setHistory(res.data)
    console.log(res.data)
  }
  const handleDeleteHistory=async(id)=>{
    const res= await deleteHistory(id)
    setDelStatus(res.data)
  }

  return (
    <>
    <div className='p-5'>
        <table className='table table-borderd'>
         <tr>
          <th>Caption</th>
          <th>Date & Time</th>
         </tr>
         {
          history ?
          history.map(item=>(
            <tr>
              <td>{item.caption}</td>
              <td>{item.datetime}</td>
              <td>
                <i onClick={()=>{handleDeleteHistory(item.id)}} className='fa-solid fa-trash text-align' style={{color:"#000000",backgroundColor:'transparent'}}></i>
              </td>
            </tr>
          ))
          :
          <p>No History</p>
         }
        </table>
    </div>
    </>
  )
}

export default History