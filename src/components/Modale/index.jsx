import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../styles/components/modale.scss'
import '../../styles/themes/global.scss'


// Configurer l'élément principal de l'application pour l'accessibilité
Modal.setAppElement('#root'); // Assurez-vous que cet élément correspond à l'élément racine de votre application

function Modale({title='', picture=''}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button className="btn-modale" onClick={openModal}>
        <h3 className="btn-modale__title">{title}</h3>
        <img className="btn-modale__img"src={picture} alt={`Site ${title}`}/>
        <p className="btn-modale__btn">Voir le projet</p>
      </button>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={`Modale du projet ${title}`}
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
        <div className='modale'>
          <h2>{title}</h2>
          <img src={picture} alt={`Image of ${title}`} />
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </Modal>
    </div>
  )
}

export default Modale;