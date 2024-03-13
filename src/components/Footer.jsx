import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='d-flex bg-primary w-100 flex-column'>
      <div className='row p-5'>
          <div className='col'>
             <h4>Media Player</h4>
             <p style={{textAlign:'justify'}}>The Media Player can handle all popular video and music formats including: mp3, mp4, wmv, avi, mkv, dv, rm, mp, mpeg ect. Media Player finds all your videos ...</p>
          </div>
          <div className='col'>
             <h4>Pages</h4>
             <Link to={''} style={{color:'black', textDecoration:'none'}}>Landing</Link><br/>
             <Link to={'dash'} style={{color:'black', textDecoration:'none'}}>Dashboard</Link><br/>
             <Link to={'his'} style={{color:'black', textDecoration:'none'}}>Watch History</Link>
          </div>
          <div className='col'>
             <h4>References</h4>
             <a href='https://getbootstrap.com/' target='_blank' style={{color:'black', textDecoration:'none'}}>Bootstrap</a><br/>
             <a href='https://react-bootstrap.netlify.app/' target='_blank' style={{color:'black', textDecoration:'none'}}>React-Bootstrap</a><br/>
             <a href='https://react.dev/' target='_blank' style={{color:'black', textDecoration:'none'}}>React</a>
          </div>
      </div>
      <div className='text-center'>
          <p>&copy; Media Player 2024</p>
      </div>
    </div>
  )
}

export default Footer
