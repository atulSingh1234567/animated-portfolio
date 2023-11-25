import React from 'react'
import '../Sidebar.css'

export default function ToggleButton(props) {
  return (
    <button className="toggle-btn" onClick={() => props.setOpen(prev => !prev)}>
      <svg viewBox="0 0 60 100" width="40" height="40">
        <rect width="60" height="6"></rect>
        <rect y="20" width="60" height="6"></rect>
        <rect y="40" width="60" height="6"></rect>
      </svg>
    </button>
  )
}
