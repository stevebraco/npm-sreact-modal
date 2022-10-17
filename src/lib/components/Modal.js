import React from 'react'

import './styles/modal.css'

const Modal = ({isOpen, onRequestClose, children}) => {
  if(isOpen) {
    return (
      <div className='modal'>
       {children}
      </div>
    )
  }
}

export default Modal
