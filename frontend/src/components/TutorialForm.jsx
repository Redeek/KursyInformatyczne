import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify';
import {createTutorial} from '../features/tutorials/tutorialSlice'


function TutorialForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        text: "",
    });

    const {title, description, text} = formData
    
    const dispatch = useDispatch()
    const {tutorial, isLoading, isError, isSuccess, message} = useSelector((state)=> state.tutorials )
    

    const onSubmit = async e => {
        e.preventDefault()

        const tutorialData = {
            title,
            description,
            text,
        }
        
        dispatch(createTutorial(tutorialData))
        if(isSuccess){
          toast.success("Tutorial został dodany poprawnie")
        }
        setFormData({title: '',
        description: '',
        text: ''})
    }

    useEffect( () =>{
      
    },[])
    

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
            <label>description</label>
            <input type="text" className="form-control" id="description" name="description" value={description} placeholder="enter description" required onChange={onChange} />
          </div>
          <div className="form-group">
            <label>text</label>
            <input type="text" className="form-control" id="text" name="text" value={text} placeholder="enter text" required onChange={onChange} />
          </div>
          <div className="form-group">
            <button className="btn-block button" type="submit">Submit</button>
          </div>
        </form>
    </section>
  )
}

export default TutorialForm