import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'

function TutorialsList({tutorial}) {
  return (
    <div>
        <h3>{tutorial.title}</h3>
    </div>
  )
}

export default TutorialsList