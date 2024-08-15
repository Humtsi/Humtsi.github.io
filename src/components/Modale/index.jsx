import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  useEffect(() => {
    // Désactiver le défilement du body lorsque la modale est ouverte
    document.body.style.overflow = modalIsOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto'; // Réactiver le défilement lorsque la modale est fermée
    };
  }, [modalIsOpen]);

  return (
    <div className="modale">
      <button className="btn-modale" style={{backgroundImage: `url(${picture})`}} onClick={openModal}>
        <div className="hover-card">
          <span>Projet {title}</span>
          <div className="hover-card__seemore"> 
            <span>Voir plus  </span> 
            <FontAwesomeIcon icon="arrow-right" />
          </div>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={`Modale du projet ${title}`}
        style={{
          content: {
            display:'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70%',
            maxHeight: '80vh',
            maxWidth: '800px',
            padding: '20px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'auto',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          }
        }}
      >
      <div className='modale-content'>
        <h2 className='modale-content__title'>{title}</h2>
        <button className='modale-content__btn'onClick={closeModal}>Fermer</button>
      </div>
      </Modal>
    </div>
  )
}

export default Modale;