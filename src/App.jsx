import { useRef } from 'react'
import MainPage from './components/MainPage/MainPage'
import CreateNoteButton from './components/CreateNoteButton/CreateNoteButton'
import Sidebar from './components/SideBar/SideBar'
import './App.css'

function App() {
  const sidebarRef = useRef()
  const handleCreateGroup = (newGroup) => { 
    sidebarRef.current.handleCreateGroup(newGroup) 
  } 
  return (
    <div className="app-container">
       <Sidebar ref={sidebarRef} />
      <main className="main-content">
        <MainPage />
        <CreateNoteButton onCreateGroup={handleCreateGroup} />
      </main>
    </div>
  )
    
  }
  

export default App
