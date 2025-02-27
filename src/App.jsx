import { useRef, useState } from 'react'
import MainPage from './components/MainPage/MainPage'
import CreateNoteButton from './components/CreateNoteButton/CreateNoteButton'
import Sidebar from './components/SideBar/SideBar'
import './App.css'
import NotesContent from './components/NotesContent/NotesContent'

function App() {
  const sidebarRef = useRef()
  const [selectedGroup, setSelectedGroup] = useState(null)

  const handleCreateGroup = (newGroup) => { 
    sidebarRef.current.handleCreateGroup(newGroup) 
  } 
  return (
    <div className="app-container">
       <Sidebar 
       ref={sidebarRef} 
       onSelectGroup={setSelectedGroup}
       />
      <main className="main-content">
        {selectedGroup ? ( 
          <NotesContent group={selectedGroup} /> 
        ) : (
          <MainPage />
        )}
        <CreateNoteButton onCreateGroup={handleCreateGroup} />
      </main>
    </div>
  )
    
  }
  

export default App
