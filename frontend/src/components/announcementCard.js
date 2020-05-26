import React from 'react'
import Heading from 'react-bulma-components/lib/components/heading'

export default function Announcement({ subject, message, dateTime, user }) {
  var cardStyle = {
    border: '1px solid hsl(0, 0%, 86%)',
    borderRadius: '5px',
    padding: '2.5%',
    marginBottom: '20px',
    width: '100%',
  }

  var userStyle = {
    fontSize: '0.75rem',
    fontWeight: 'bold',
  }

  var dateStyle = {
    fontSize: '0.75rem',
    fontStyle: 'italic',
  }

  var contentStyle = {
    padding: '10px',
  }

  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <p style={userStyle}>{user}</p>
          <p style={dateStyle}>{dateTime}</p>
        </div>
      </div>
      <div style={contentStyle}>
        <Heading size={4}>{subject}</Heading>
        <div dangerouslySetInnerHTML={{ __html: message }}></div>
      </div>
    </div>
  )
}
