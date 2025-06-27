import React from 'react'

const Button = ({ label = "Search", type = "submit", onClick }) => {
  return (
  <button type={type} onClick={onClick} >
      {label}
    </button>
  )
}

export default Button;