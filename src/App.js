import { useState } from 'react';
import './App.css';
import { Modal } from './lib';

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <button onClick={openModal}>click</button>
    <Modal 
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
  >
    modal
    <button onClick={closeModal}>close modal</button>
  </Modal>
    </div>
  );
}

export default App;
