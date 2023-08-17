import { addHours } from 'date-fns';
import React, { useState } from 'react'
import Modal from 'react-modal';
import DatePicker from "react-datepicker";


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
  const [formsValues, setFormsValues] = useState({
    title: 'carlos',
    notes: 'janon',
    start: new Date(),
    end: addHours(new Date(), 2)
  })
  const onInputChange = ({ target }) => {
    setFormsValues({
      ...formsValues,
      [target.name]: target.value

    })

  }
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
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container">

        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={formsValues.start}
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <input className="form-control" placeholder="Fecha inicio" />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formsValues.title}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formsValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">Información adicional</small>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary btn-block"
        >
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>

      </form>
    </Modal>
  )
}
