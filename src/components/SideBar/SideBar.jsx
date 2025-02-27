import { useState } from 'react'
import NoteGroup from '../NoteGroup/NoteGroup'
import './Sidebar.css'

const Sidebar = () => {
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [noteGroups, setNoteGroups] = useState([
    { id: 1, title: 'My Notes', color: '#0047FF' },
    { id: 2, title: 'My personal grp', color: '#B38BFA' },
    { id: 3, title: 'Javascript grp', color: '#FF79F2' },
    { id: 4, title: 'HTML grp', color: '#43E6FC' },
    { id: 5, title: 'CSS Notes', color: '#F19576' },
    { id: 6, title: 'SQL Notes', color: '#6691FF' },
    { id: 7, title: 'Python Notes', color: '#FF4ECD' },
    { id: 8, title: 'Python Notes', color: '#FF4ECD' },
    { id: 9, title: 'Python Notes', color: '#FF4ECD' },
    { id: 10, title: 'Python Notes', color: '#FF4ECD' },
    { id: 11, title: 'Python Notes', color: '#FF4ECD' },
    { id: 12, title: 'Python Notes', color: '#FF4ECD' },
    { id: 13, title: 'Python Notes', color: '#FF4ECD' }
  ])

  const handleCreateGroup = (newGroup) => { 
    const newId = noteGroups.length + 1 
    setNoteGroups([...noteGroups, { ...newGroup, id: newId }]) 
  } 

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
            onClick={() => setSelectedGroup(group.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar