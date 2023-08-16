import React, { useState } from 'react'
import Modal from 'react-modal';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true)
  const OnCloseModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Modal
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
      className='modal'
      isOpen={isOpen}
      onRequestClose={OnCloseModal}
      style={customStyles}>
      <h1>Hola mundo </h1>
      <hr />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum et, error hic quos consequuntur soluta, adipisci repellendus iste, totam fugit eaque! Repudiandae totam officia vitae quam tempora, nam ut incidunt! </p>
    </Modal>
  )
}
