import NoteList from './components/NoteList';
import { useState, useEffect } from 'react';
import './App.css'
import Search from './components/Search';
import Header from './components/Header';

function App() {

    const [ notes, setNotes ] = useState(
      JSON.parse(localStorage.getItem("note-data")) || []
    );

    useEffect(() => {
      localStorage.setItem("note-data", JSON.stringify(notes));
    }, [notes]);

    const addNote = (text) => {
      const date = new Date()
      const newNote = {
        id: Math.random() * Math.random() * Math.random(),
        date: date.toLocaleDateString(),
        text: text
      }
      const newNotes = [ ...notes, newNote]
      setNotes(newNotes)
      console.log(newNote)
    }


    const removeNote = (id) => {
      const newNotes = notes.filter((note)=> note.id !== id)
      setNotes(newNotes)
    }

    const [ searchNote, setSearchNote] = useState('')

    const [darkMode, setDarkMode] = useState(false)

    
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
      <Header handleToggleDarkMode={setDarkMode}/>
          <Search handleSearchNote={setSearchNote}/>
            <NoteList 
              notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchNote))} 
              handleAddNote={addNote}
              handleDelete={removeNote}
      />
    </div>
    </div>
  );
}

export default App;
