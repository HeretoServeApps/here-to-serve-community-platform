import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/sass/styles.scss'

import Button from 'react-bulma-components/lib/components/button'
import Container from 'react-bulma-components/lib/components/container'
import Dropdown from 'react-bulma-components/lib/components/dropdown';
import CommunityNavbar from '../components/communityNavbar'

export default function CalendarPage(props) {
  const [selectedMonth, setSelectedMonth] = useState(moment().format("MMMM"))
  const [selectedYear, setSelectedYear] = useState(moment().format("YYYY"))
  const [date, setDate] = useState()


  var containerStyle = {
    margin: '5% auto',
    maxWidth: '80%',
  }



  const years = [2017, 2018, 2019, 2020]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  // Setup the localizer by providing the moment (or globalize) Object
  // to the correct localizer.
  const localizer = momentLocalizer(moment)

  function updateDate() {
    setDate(moment(`${selectedMonth} ${selectedYear}`, "MMMM YYYY").toDate())
  }


  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Dropdown label={selectedMonth} onChange={(m) => setSelectedMonth(m)}>
          {months.map((month) => (
            <Dropdown.Item value={month} >
              {month}
            </Dropdown.Item>
          ))}
        </Dropdown>
        <Dropdown label={selectedYear} onChange={(y) => setSelectedYear(y)}>
          {years.map((year) => (
            <Dropdown.Item value={year} >
              {year}
            </Dropdown.Item>
          ))}
        </Dropdown>
        <Button onClick={updateDate} color="info">Go</Button>
        <Calendar
          localizer={localizer}
          events={[]}
          style={{ 'height':500, 'margin-top':15 }}
          date={date}
          onNavigate={date => setDate(date)}
        />
      </Container>
    </div>
  )
}
