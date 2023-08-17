import { addHours, differenceInSeconds } from 'date-fns';
import React, { useState, useMemo } from 'react'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Modal from 'react-modal';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';

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
registerLocale('es', es)
export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [formsValues, setFormsValues] = useState({
    title: 'carlos',
    notes: 'janon',
    start: new Date(),
    end: addHours(new Date(), 2)
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const titleClass = useMemo(() => {
    if (!formSubmitted) return ''
    return (formsValues.title.length > 0)
      ? 'is-valid' : 'is-invalid'
  },
    [formsValues.title, formSubmitted]
  )

  const onInputChange = ({ target }) => {
    setFormsValues({
      ...formsValues,
      [target.name]: target.value

    })

  }
  const onDateChange = (event, changing) => {
    setFormsValues({
      ...formsValues,
      [changing]: event
    })
  }
  const OnCloseModal = () => {
    setIsOpen(!isOpen)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true)
    const differnce = differenceInSeconds(formsValues.end, formsValues.start)
    if (isNaN(differnce) || differnce <= 0) {
      Swal.fire('Fechas Incorrectas', 'Revisar las FECHAS ingresadas.', 'error')
      return
    }
    if (formsValues.title.length <= 0) return
    console.log(formsValues);
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
      <form className="container" onSubmit={onSubmit}>

        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={formsValues.start}
            className='form-control '
            dateFormat='Pp'
            showTimeSelect
            locale='es'
            timeCaption='Hora'
            onChange={(event) => { onDateChange(event, 'start') }}
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            minDate={formsValues.start}
            selected={formsValues.end}
            className='form-control'
            dateFormat='Pp'
            showTimeSelect
            locale='es'
            timeCaption='Hora'
            onChange={(event) => { onDateChange(event, 'end') }}
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${titleClass}`}
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
