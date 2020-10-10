
import React from 'react'
import { Checkbox } from 'react-bulma-components/lib/components/form'

const CheckboxField = ({ text, onChange, checked }) => (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Checkbox style={{ marginRight: '10px' }} onChange={onChange} checked={checked}/>
      <p>{text}</p>
    </div>
)

export default CheckboxField
  