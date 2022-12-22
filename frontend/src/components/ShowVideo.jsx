import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ShowVideo({showVideo,handleCloseVideo, link}) {

    return (<>
        <Modal show={showVideo} onHide={handleCloseVideo} size='xl'>
            <Modal.Header closeButton>
              <Modal.Title>Watch now</Modal.Title>
            </Modal.Header>
            <Modal.Body className=' d-flex justify-content-center'> 
             <iframe src={`https://www.youtube.com/embed/${link}`} height="500" width={"900"}></iframe>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseVideo}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>)
}

export default ShowVideo