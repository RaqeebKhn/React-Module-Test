import { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import NoteGroup from '../NoteGroup/NoteGroup'
import CreateNoteButton from '../CreateNoteButton/CreateNoteButton'
import './Sidebar.css'

const Sidebar = forwardRef(({ onSelectGroup, onCreateGroup, showCreateButton }, ref) => {  
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [noteGroups, setNoteGroups] = useState(() => {                    
    const savedGroups = localStorage.getItem('noteGroups')                
    return savedGroups ? JSON.parse(savedGroups) : []                     
  })                                                                      

  useEffect(() => {                                                       
    localStorage.setItem('noteGroups', JSON.stringify(noteGroups))        
  }, [noteGroups]) 

  const handleCreateGroup = (newGroup) => {  
    const isDuplicate = noteGroups.some(
      group => group.title.toLowerCase() === newGroup.title.toLowerCase()
    )
    
    if (isDuplicate) {
      return false 
    }

    const newId = noteGroups.length + 1
    const newGroupWithId = { ...newGroup, id: newId }
    setNoteGroups([...noteGroups, newGroupWithId])
    return true 
  }

  useImperativeHandle(ref, () => ({ 
    handleCreateGroup 
  }))

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Pocket Notes</h1>
      </div>
      <div className="notes-list">
        {noteGroups.map(group => (
          <NoteGroup
            key={group.id}
            title={group.title}
            color={group.color}
            selected={selectedGroup === group.id}       
            onClick={() => {                          
              setSelectedGroup(group.id)    
              onSelectGroup(group)           
            }}  
          />
        ))}
      </div>
      {showCreateButton && (                                                    
        <CreateNoteButton onCreateGroup={onCreateGroup} />                     
      )} 
    </div>
  )
})

Sidebar.displayName = 'Sidebar'

export default Sidebar