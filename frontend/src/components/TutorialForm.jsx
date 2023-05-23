import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createTutorial} from '../features/tutorials/tutorialSlice'


function TutorialForm() {
    const [formData, setFormData] = useState({
        title: "",
        cardDescription: "",
        longDescription: "",
        language: ""
    });

    const {title, cardDescription, longDescription, language} = formData
    
    const dispatch = useDispatch()    

    const onSubmit = async e => {
        e.preventDefault()

        const tutorialData = {
            title,
            cardDescription,
            longDescription,
            language
        }
        
        dispatch(createTutorial(tutorialData))
        
        setFormData({
          title: " ",
          cardDescription: " ",
          longDescription: " ",
          language: " "
      })
    }
    

    const onChange = (e) => {
        setFormData((prevState)=>({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

      const languages = [
        { name: "Java", value: "Java"},
        { name: "Cpp", value: "C++"},
        { name: "CSh", value: "C#"},
        { name: "JavaScript", value: "JavaScript"},
        { name: "Python", value: "Python"},
        { name: "Assembler", value: "Assembler"},
        { name: "C", value: "C"}
      ]


  return (
    <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>title</label>
            <input type="text" className="form-control" id="title" name="title" value={title} placeholder="enter title of tutorial" required onChange={onChange} />
          </div>
          <div className="form-group">
            <label>Card description</label>
            <textarea className="form-textarea" id="cardDescription" name="cardDescription" value={cardDescription} placeholder="enter Card description" required onChange={onChange} />
          </div>
          <div className="form-group">
            <label>Long description</label>
            <textarea className="form-textarea" id="longDescription" name="longDescription" value={longDescription} placeholder="enter long desctiption" required onChange={onChange} />   
          </div>
          
          <div className="form-group">
            <label>Language</label>
            <select className="form-select" id="languages" defaultValue="noone" name="languages" onChange={(e)=>{setFormData((prevState) => ({...prevState, language: e.target.value, }))}}>
              <option disabled value={"noone"}>Choose language</option>
              {languages.map( languagess => (
                  <option key={languagess.name} value={languagess.value} > {languagess.value} </option>
              ))} 
            </select>
          </div>
          
          <div className="form-group">
            <button className="btn-block button btn-group-vertical" type="submit">Submit</button>
          </div>
        </form>
    </section>
  )
}

export default TutorialForm