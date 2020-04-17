import React, { useState } from "react"

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import Table from 'react-bulma-components/lib/components/table'
import Button from 'react-bulma-components/lib/components/button';
import {
    Field,
    Control,
    Input,
    Label,
} from 'react-bulma-components/lib/components/form'

import SideNavAccount from '../components/sideNavAccount'

export default function AccountSettings() {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    var containerStyle = {
        margin: '5% auto',
        maxWidth: '80%',
        padding: '4rem',
    }

    return (
        <Container style={containerStyle}>
            <Heading size={4} style={{margin:'0% 0% 3% 30%',}}>Account Information</Heading>
            <Columns>
                <Columns.Column style={{ maxWidth:'30%' }}>
                    <SideNavAccount />
                </Columns.Column>
                <Columns.Column>
                    <Table>
                        <tbody>
                            <tr>
                                <td align='right'><strong>First Name</strong></td>
                                <td>Lebron</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Last Name</strong></td>
                                <td>James</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Email</strong></td>
                                <td>lebron.james@basketball.com</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Phone 1</strong></td>
                                <td>(123) - 456 - 7890</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Phone 1 Type</strong></td>
                                <td>Cell</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Phone 2</strong></td>
                                <td>(123) - 456 - 7890</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Phone 2 Type</strong></td>
                                <td>Home</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Adress</strong></td>
                                <td>123 Street Name</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>City</strong></td>
                                <td>Philadelphia</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Zip code</strong></td>
                                <td>12345</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>State/Province</strong></td>
                                <td>PA</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Country</strong></td>
                                <td>United States</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Heading size={4} style={{margin:'8% 0% 3% 0%',}}>Edit Password</Heading>
                    <Field style={{maxWidth:'50%'}}>
                        <Label>Current Password</Label>
                        <Control>
                            <Input
                                value={currentPassword}
                                onChange={e => setCurrentPassword(e.target.value)}
                                placeholder=''
                            />
                        </Control>
                    </Field>
                    <Field style={{maxWidth:'50%'}}>
                        <Label>New Password</Label>
                        <Control>
                            <Input
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                                placeholder=''
                            />
                        </Control>
                    </Field>
                    <Field style={{maxWidth:'50%'}}>
                        <Label>Confirm New Password</Label>
                        <Control>
                            <Input
                                value={confirmNewPassword}
                                onChange={e => setConfirmNewPassword(e.target.value)}
                                placeholder=''
                            />
                        </Control>
                    </Field>
                    <Columns style={{margin: '3% auto', maxWidth: '80%'}}>
                        <Columns.Column>
                            <Button color="primary" fullwidth={true}>SAVE CHANGES</Button>
                        </Columns.Column>
                        <Columns.Column>
                            <Button fullwidth={true}>CANCEL</Button>
                        </Columns.Column>
                    </Columns>
                </Columns.Column>
            </Columns>
        </Container>
    );
}