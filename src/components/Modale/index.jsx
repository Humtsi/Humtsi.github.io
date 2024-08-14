import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../styles/components/header.scss'
import '../../styles/themes/global.scss'


// Configurer l'élément principal de l'application pour l'accessibilité
Modal.setAppElement('#root'); // Assurez-vous que cet élément correspond à l'élément racine de votre application

function Modale() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          }
        }}
      >
        <h2>Hello, I'm a modal!</h2>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  )
}

export default Modale;