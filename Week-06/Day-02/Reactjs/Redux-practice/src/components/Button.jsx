import React from 'react'
import PropTypes from 'prop-types';


const ButtonComponent = ({ label='Search', type='submit', onClick }) => {
  return (
    <div>
        <button type={type} onClick={onClick}>{label}</button>
    </div>
  )
}


ButtonComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
//   onClick: PropTypes.func
}

export default ButtonComponent;
