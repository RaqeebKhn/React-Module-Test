import MainPage from './components/MainPage/MainPage'
import CreateNoteButton from './components/CreateNoteButton/CreateNoteButton'
import Sidebar from './components/SideBar/SideBar'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <MainPage />
        <CreateNoteButton />
      </main>
    </div>
  )
    
  }
  

export default App
