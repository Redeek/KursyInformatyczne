import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addChapter} from '../features/tutorials/tutorialSlice'
import {useParams} from 'react-router-dom'

function AddChapter({show, handleClose}) {

    const {id} = useParams()
    const [formData, setFormData] = useState({
        title: "",
        text: "",
        link: "",
    });

    const {title, text, link} = formData
    
    const dispatch = useDispatch()    

    const onSubmit = async e => {
        e.preventDefault()

        const tutorialData = {
            id,
            title,
            text,
            link
        }
        
        dispatch(addChapter(tutorialData))
        
        window.location.reload()
    }
    

    const onChange = (e) => {
        setFormData((prevState)=>({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

  return (<>
    <Modal show={show} onHide={handleClose}>
    <form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Chapter</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <section className="justify-content-left">
            
            <div className="form-group">
                <label>title</label>
                <input type="text" className="form-control" id="title" name="title" value={title} placeholder="enter title of tutorial" required onChange={onChange} />
            </div>
            <div className="form-group">
                <label>text</label>
                <textarea className="form-textarea" id="text" name="text" value={text} placeholder="enter Card description" required onChange={onChange} />
            </div>
            <div className="form-group">
                <label>Youtube link</label>
                <input type="text" className="form-control text-align-left" id="link" name="link" value={link} placeholder="enter link" onChange={onChange} />
            </div>
            
        </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="btn-block button btn-group-vertical" type='sumbit' onClick={handleClose}>
            Create new Chapter
          </button>
        </Modal.Footer>
        </form>
      </Modal>
    </>)
}

export default AddChapter