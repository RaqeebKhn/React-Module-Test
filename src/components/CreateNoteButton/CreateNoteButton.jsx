import { useState } from 'react'
import CreateGroupPopup from '../CreateGroupPopup/CreateGroupPopup'
import './CreateNoteButton.css'

const CreateNoteButton = ({ onCreateGroup }) => { 
  const [showPopup, setShowPopup] = useState(false) 

  return (
    <>
      <button 
        className="create-note-button"
        onClick={() => setShowPopup(true)} 
      >
        <span className="plus-icon">+</span>
      </button>
      {showPopup && ( 
        <CreateGroupPopup 
          onClose={() => setShowPopup(false)} 
          onCreateGroup={onCreateGroup} 
        /> 
      )} 
    </>
  )
}

export default CreateNoteButton