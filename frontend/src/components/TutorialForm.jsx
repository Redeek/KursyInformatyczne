import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createTutorial} from '../features/tutorials/tutorialSlice'


function TutorialForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        text: "",
    });

    const {title, description, text} = formData
    
    const dispatch = useDispatch()
    

    const onSubmit = async e => {
        e.preventDefault()

        const tutorialData = {
            title,
            description,
            text,
        }
        console.log(tutorialData)
        
        dispatch(createTutorial(tutorialData))

        setFormData({title: '',
        description: '',
        text: ''})
        
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
            <input type="text" className="form-control" id="title" name="title" value={title} placeholder="enter title of tutorial" onChange={onChange} />
          </div>
          <div className="form-group">
            <label>description</label>
            <input type="text" className="form-control" id="description" name="description" value={description} placeholder="enter description" onChange={onChange} />
          </div>
          <div className="form-group">
            <label>text</label>
            <input type="text" className="form-control" id="text" name="text" value={text} placeholder="enter text" onChange={onChange} />
          </div>
          <div className="form-group">
            <button className="btn-block btn" type="submit">Submit</button>
          </div>
        </form>
    </section>
  )
}

export default TutorialForm