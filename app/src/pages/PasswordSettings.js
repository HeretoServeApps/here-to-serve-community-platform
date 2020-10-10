import React, { useState, useEffect, useCallback } from "react"

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import Button from 'react-bulma-components/lib/components/button';
import {
    Field,
    Control,
    Input,
    Label,
} from 'react-bulma-components/lib/components/form'

import SideNavAccount from '../components/sideNavAccount'

export default function PasswordSettings() {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    var containerStyle = {
        margin: '3% auto',
        maxWidth: '80%',
        padding: '4rem',
    }


    return (
        <Container style={containerStyle}>
            <Columns>
                <Columns.Column style={{ maxWidth: '30%' }}>
                    <SideNavAccount />
                </Columns.Column>
                <Columns.Column>
                    {/* Password Settings */}
                    <Heading size={4}>Edit Password</Heading>
                    <Field style={{ maxWidth: '50%' }}>
                        <Label>Current Password</Label>
                        <Control>
                            <Input
                                value={currentPassword}
                                onChange={e => setCurrentPassword(e.target.value)}
                                placeholder=''
                            />
                        </Control>
                    </Field>
                    <Field style={{ maxWidth: '50%' }}>
                        <Label>New Password</Label>
                        <Control>
                            <Input
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                                placeholder=''
                            />
                        </Control>
                    </Field>
                    <Field style={{ maxWidth: '50%', marginBottom: '8%'}}>
                        <Label>Confirm New Password</Label>
                        <Control>
                            <Input
                                value={confirmNewPassword}
                                onChange={e => setConfirmNewPassword(e.target.value)}
                                placeholder=''
                            />
                        </Control>
                    </Field>
                    <Button 
                        color="primary" 
                        fullwidth={true} 
                        style={{maxWidth: '40%', marginTop: '8%'}} 
                    >
                        SAVE CHANGES
                    </Button>
                </Columns.Column>
            </Columns>
        </Container>
    );
}