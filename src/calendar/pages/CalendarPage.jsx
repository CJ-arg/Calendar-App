
import React, { useState } from 'react'
import { Navbar, CalendarEvent, CalendarModal } from '../index'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'
import { getMessagesEs, localizer } from '../../helpers'
import { useUiStore, useCalendarStore } from '../../hooks'



export const CalendarPage = () => {
  const { openDateModal } = useUiStore()
  const { events } = useCalendarStore()
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
    // console.log({ event, start, end, isSelected });
    return { style }
  }
  const onDoubleClick = (event) => {
    openDateModal()
  }
  const onSelect = (event) => {
    console.log({ click: event });
  }
  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event)
    setLastView(event)
  }
  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        defaultView={lastView}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
    </>
  )
}
