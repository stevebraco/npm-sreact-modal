import React from 'react'

import './styles/modal.css'

const Modal = ({isOpen, onRequestClose, children}) => {
  if(isOpen) {
    return (
      <div onClick={onRequestClose} className='container-modal'>
        <div className='modal'>
         {children}
        </div>
      </div>
    )
  }
}

export default Modal
