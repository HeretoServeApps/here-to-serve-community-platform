import React, { useState, useEffect } from "react"

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import Table from 'react-bulma-components/lib/components/table'
import Button from 'react-bulma-components/lib/components/button';
import { Link } from 'react-router-dom'
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
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone1, setPhone1] = useState('')
    const [phone1Type, setPhone1Type] = useState('')
    const [phone2, setPhone2] = useState('')
    const [phone2Type, setPhone2Type] = useState('')
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [zipcode, setZipcode]  = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')


    var containerStyle = {
        margin: '5% auto',
        maxWidth: '80%',
        padding: '4rem',
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetch('/current_user/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(json => {
                    setFirstName(json.first_name)
                    setLastName(json.last_name)
                    setEmail(json.email)
                    setPhone1(json.phone_number_1)
                    setPhone1Type(json.phone_number_1_type)
                    json.phone_number_2 ? setPhone2(json.phone_number_2) : setPhone2('-')
                    json.phone_number_2_type ? setPhone2Type(json.phone_number_2_type) : setPhone2Type('-')
                    setAddressLine1(json.address_line_1)
                    json.address_line_2 ? setAddressLine2(json.address_line_2) : setAddressLine2('-')
                    setCity(json.city)
                    json.state ? setState(json.state) : setState('-')
                    setCountry(json.country)
                    json.zipcode ? setZipcode(json.zipcode) : setZipcode('-')
                })
        }
    }, [])

    return (
        <Container style={containerStyle}>
            <Columns style={{ fullWidth: true, margin: '0% 0% 1% 18%' }}>
                <Columns.Column>
                    <Heading size={4} style={{ margin: '0% 0% 3% 30%' }}>Account Information</Heading>
                </Columns.Column>
                <Columns.Column>
                    <div style={{ display: 'flex' }}>
                        <Button color='primary' style={{ marginRight: '10px' }}>
                            <Link to='#' style={{ color: 'white' }}>
                                Edit
                        </Link>
                        </Button>
                    </div>
                </Columns.Column>
            </Columns>
            <Columns>
                <Columns.Column style={{ maxWidth: '30%' }}>
                    <SideNavAccount />
                </Columns.Column>
                <Columns.Column>
                    <Table>
                        <tbody>
                            <tr>
                                <td align='right'><strong>First Name</strong></td>
                                <td>{firstName}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Last Name</strong></td>
                                <td>{lastName}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Email</strong></td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Phone 1</strong></td>
                                <td>{phone1}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Phone 1 Type</strong></td>
                                <td>{phone1Type}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Phone 2</strong></td>
                                <td>{phone2}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Phone 2 Type</strong></td>
                                <td>{phone2Type}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Address Line 1</strong></td>
                                <td>{addressLine1}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Address Line 2</strong></td>
                                <td>{addressLine2}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>City</strong></td>
                                <td>{city}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Zip code</strong></td>
                                <td>{zipcode}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>State/Province</strong></td>
                                <td>{state}</td>
                            </tr>
                            <tr>
                                <td align='right'><strong>Country</strong></td>
                                <td>{country}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Heading size={4} style={{ margin: '8% 0% 3% 0%', }}>Edit Password</Heading>
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
                    <Field style={{ maxWidth: '50%' }}>
                        <Label>Confirm New Password</Label>
                        <Control>
                            <Input
                                value={confirmNewPassword}
                                onChange={e => setConfirmNewPassword(e.target.value)}
                                placeholder=''
                            />
                        </Control>
                    </Field>
                    <Columns style={{ margin: '3% auto', maxWidth: '80%' }}>
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