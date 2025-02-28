import { useRef, useState, useEffect } from 'react'
import MainPage from './components/MainPage/MainPage'
import CreateNoteButton from './components/CreateNoteButton/CreateNoteButton'
import Sidebar from './components/SideBar/SideBar'
import './App.css'
import NotesContent from './components/NotesContent/NotesContent'

function App() {
  const sidebarRef = useRef()
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768)  

  useEffect(() => {                                                          
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])   

  const handleCreateGroup = (newGroup) => { 
    sidebarRef.current.handleCreateGroup(newGroup) 
  } 

  const handleSelectGroup = (group) => {                                     
    setSelectedGroup(group)                                                  
  }  
  return (
    <div className="app-container">
       <Sidebar 
       ref={sidebarRef} 
       onSelectGroup={handleSelectGroup}
       onCreateGroup={handleCreateGroup}                              
         showCreateButton={selectedGroup !== null}
         className={isMobileView && selectedGroup ? 'hidden' : ''}
       />
      <main className={`main-content ${isMobileView && selectedGroup ? 'active' : ''}`}>
        {selectedGroup ? ( 
          <NotesContent group={selectedGroup}
          onBack={() => setSelectedGroup(null)}                        
          isMobileView={isMobileView}
          /> 
        ) : (
          <>
          <MainPage />
          <CreateNoteButton onCreateGroup={handleCreateGroup} />
          </>
        )}
        
      </main>
    </div>
  )
    
  }
  

export default App
