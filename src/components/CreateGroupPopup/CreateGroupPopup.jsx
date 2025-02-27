import { useEffect, useRef, useState } from 'react' 
import './CreateGroupPopup.css' 

const CreateGroupPopup = ({ onClose, onCreateGroup }) => { 
  const [groupName, setGroupName] = useState('') 
  const [selectedColor, setSelectedColor] = useState('#B38BFA') 
  const popupRef = useRef(null) 

  const colors = [ 
    '#B38BFA',
    '#FF79F2',
    '#43E6FC',
    '#F19576',
    '#0047FF',
    '#6691FF'
  ]

  useEffect(() => { 
    const handleClickOutside = (event) => { 
      if (popupRef.current && !popupRef.current.contains(event.target)) { 
        onClose() 
      } 
    } 

    document.addEventListener('mousedown', handleClickOutside) 
    return () => document.removeEventListener('mousedown', handleClickOutside) 
  }, [onClose]) 

  const handleSubmit = (e) => { 
    e.preventDefault() 
    if (groupName.trim()) { 
      onCreateGroup({ 
        title: groupName, 
        color: selectedColor 
      }) 
      onClose() 
    } 
  } 

  return ( 
    <div className="popup-overlay"> 
      <div className="popup-content" ref={popupRef}> 
        <h2>Create New Group</h2> 
        <form onSubmit={handleSubmit}> 
          <div className="group-name-input"> 
            <label htmlFor="groupName">Group Name</label> 
            <input 
              type="text" 
              id="groupName" 
              placeholder="Enter group name" 
              value={groupName} 
              onChange={(e) => setGroupName(e.target.value)} 
              maxLength={20} 
            /> 
          </div> 
          <div className="color-selector"> 
            <label>Choose colour</label> 
            <div className="color-options"> 
              {colors.map((color) => ( 
                <div 
                  key={color} 
                  className={`color-circle ${selectedColor === color ? 'selected' : ''}`} 
                  style={{ backgroundColor: color }} 
                  onClick={() => setSelectedColor(color)} 
                ></div> 
              ))} 
            </div> 
          </div> 
          <button type="submit" className="create-btn">Create</button> 
        </form> 
      </div> 
    </div> 
  ) 
} 

export default CreateGroupPopup 