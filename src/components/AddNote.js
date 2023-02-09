import './AddNote.css'
import { useState } from 'react'

function AddNote({handleAddNote}) {

    const [ userText, setUserText ] = useState('');
    const textLimit = 200;

    const handleChange = (event) => {
        if(textLimit - event.target.value.length >= 0){
            setUserText(event.target.value)
        }
    }

    const handleSave = () => {
        if(userText.trim().length > 0){
        handleAddNote(userText)
        setUserText('')
     }
    }

  return (
    <div className="note new">
        <textarea 
            rows='8'
            cols='10'
            value={userText}
            placeholder='type here...'
            onChange={handleChange}
        >
        </textarea>
        <div className="note-footer">
            <small>{textLimit - userText.length} remaining</small>
            <button className="save" onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default AddNote