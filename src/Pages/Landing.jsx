import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Landing() {
  return (
   <>
   <div className='d-flex justify-content-center align-items-center p-5' style={{height:"85vh"}}>
      <div className='row'>
        <div className='col shadow  p-4'>
           <h2>Media Player</h2>
           <p style={{textAlign:'justify'}}>Media player software is a type of application software for playing multimedia computer files like audio and video files. 
           Media players commonly display standard media control icons known from physical devices such as tape recorders and CD players, such as play , pause , fastforward , rewind , and stop  buttons. 
           In addition, they generally have progress bars (or "playback bars"), which are sliders to locate the current position in the duration of the media file.</p>
           <Link to={'dash'} className='btn btn-success'>Explore</Link>
        </div>
        <div className='col'>
          <img className='img-fluid rounded shadow' src="https://www.mediadimo.com/wp-content/uploads/site/software/screenshot/1483425545519533135.jpeg" alt="" />
        </div>
      </div>
   </div>
   <div className='mt-3'>
      <h2 className='text-center'>Features</h2>
      <div className='d-flex flex-row justify-content-between p-3'>
      <Card style={{ width: '20rem' }}>
      <Card.Img style={{height:'16rem'}} variant="top" src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" />
      <Card.Body>
        <Card.Title>Upload Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img style={{height:'16rem'}} variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" />
      <Card.Body>
        <Card.Title>Play Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem' }}>
      <Card.Img style={{height:'16rem'}} variant="top" src="https://i.gifer.com/F1Wp.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
   </div>
   <div className='mt-3 p-5'>
      <h2 className='text-center'>Why media player</h2>
      <div className='d-flex justify-content-center align-items-center mt-2 p-2'>
        <div className='p-2'>
       <h4>Simplle , Secure and Friendly...</h4>
       <p className='' style={{textAlign:"justify"}}>Media player software is a type of application software for playing multimedia computer files like audio and video files. 
           Media players commonly display standard media control icons known from physical devices such as tape recorders and CD players, such as play , pause , fastforward , rewind , and stop  buttons. 
           In addition, they generally have progress bars (or "playback bars"), which are sliders to locate the current position in the duration of the media file. </p>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ycjrMvPZ8Lw?si=JyVh4kOvd4BcHQ0t&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
   </div>
   </>
  )
}

export default Landing
