import './NoteGroup.css'

const NoteGroup = ({ title, color, selected }) => {
  const getInitials = (title) => {
    return title
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className={`note-group ${selected ? 'selected' : ''}`}>
      <div className="note-icon" style={{ backgroundColor: color }}>
        {getInitials(title)}
      </div>
      <span className="note-title">{title}</span>
    </div>
  )
}

export default NoteGroup