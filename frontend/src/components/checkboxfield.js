
import React from 'react'
import { Checkbox } from 'react-bulma-components/lib/components/form'

const CheckboxField = ({ text }) => (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Checkbox style={{ marginRight: '10px' }} />
      <p>{text}</p>
    </div>
)

export default CheckboxField
  