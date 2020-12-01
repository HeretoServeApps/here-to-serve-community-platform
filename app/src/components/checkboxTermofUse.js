import React from 'react'
import { Checkbox } from 'react-bulma-components/lib/components/form'

const CheckboxTermofUse = () => (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Checkbox style={{ marginRight: '10px' }} />
        <p>I have agreed to the <a target="_blank" href='https://lotsahelpinghands.com/terms/' rel='noopener noreferrer'>Terms of Use</a>.</p>
    </div>  
)

export default CheckboxTermofUse