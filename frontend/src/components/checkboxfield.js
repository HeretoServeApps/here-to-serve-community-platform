
import React from 'react'
import { Checkbox } from 'react-bulma-components/lib/components/form'

const CheckboxField = ({ text, onChange }) => (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <Checkbox style={{ marginRight: '10px' }} onClick={onChange}/>
      <p>{text}</p>
    </div>
)

export default CheckboxField
  