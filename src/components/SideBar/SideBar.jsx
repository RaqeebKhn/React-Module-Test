import { useState } from 'react'
import NoteGroup from '../NoteGroup/NoteGroup'
import './Sidebar.css'

const Sidebar = () => {
  const [noteGroups] = useState([
    { id: 1, title: 'My Notes', color: '#0047FF' },
    { id: 2, title: 'My personal grp', color: '#B38BFA' },
    { id: 3, title: 'Javascript grp', color: '#FF79F2' },
    { id: 4, title: 'HTML grp', color: '#43E6FC' },
    { id: 5, title: 'CSS Notes', color: '#F19576' },
    { id: 6, title: 'SQL Notes', color: '#6691FF' },
    { id: 7, title: 'Python Notes', color: '#FF4ECD' }
  ])

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
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar