import React from 'react'
import './Note.css'
import {MdDeleteForever} from 'react-icons/md'

function Note({id, text, date, handleDelete}) {
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever className='delete' size='1.3em' onClick={() => handleDelete(id)}/>
        </div>
    </div>
  )
}

export default Note