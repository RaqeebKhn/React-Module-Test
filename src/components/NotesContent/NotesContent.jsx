import { useState } from 'react'
import './NotesContent.css'

const NotesContent = ({ group }) => {  
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newNote.trim()) {
      const now = new Date()
      const timestamp = now.toLocaleDateString('en-GB', { 
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).replace(',', ' •')
      
      setNotes([...notes, {
        id: notes.length + 1,
        content: newNote,
        timestamp
      }])
      setNewNote('')
    }
  }

   const handleKeyPress = (e) => { 
    if (e.key === 'Enter' && !e.shiftKey) {  
      e.preventDefault()  
      handleSubmit(e)  
    }  
  }  

  return (
    <div className="notes-content">
      <div className="notes-header">
        <div className="group-icon" style={{ backgroundColor: group.color }}>
          {group.title.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
        </div>
        <h2>{group.title}</h2>
      </div>
      
      <div className="notes-list-container">
        {notes.map(note => (
          <div key={note.id} className="note-item">
            <p className="note-content">{note.content}</p>
            <p className="note-timestamp">{note.timestamp}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="notes-input">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Here's the sample text for sample work"
        />
        <button type="submit">
          <span className="send-icon">➤</span>
        </button>
      </form>
    </div>
  )
}

export default NotesContent