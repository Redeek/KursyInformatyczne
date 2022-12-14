import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addChapter} from '../features/tutorials/tutorialSlice'
import {useParams, useNavigate} from 'react-router-dom'


function ChapterForm() {
    
    const {id} = useParams()
    const [formData, setFormData] = useState({
        title: "",
        text: ""
    });

    const {title, text} = formData
    
    const dispatch = useDispatch()    

    const onSubmit = async e => {
        e.preventDefault()

        const tutorialData = {
            id,
            title,
            text,
        }
        
        dispatch(addChapter(tutorialData))
        
        setFormData({
          title: " ",
          text: " "
      })
    }
    

    const onChange = (e) => {
        setFormData((prevState)=>({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

  return (
    <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>title</label>
            <input type="text" className="form-control" id="title" name="title" value={title} placeholder="enter title of tutorial" required onChange={onChange} />
          </div>
          <div className="form-group">
            <label>text</label>
            <textarea className="form-textarea" id="text" name="text" value={text} placeholder="enter Card description" required onChange={onChange} />
          </div>
          <div className="form-group">
            <button className="btn-block button btn-group-vertical" type="submit">Submit</button>
          </div>
        </form>
    </section>
  )
}

export default ChapterForm