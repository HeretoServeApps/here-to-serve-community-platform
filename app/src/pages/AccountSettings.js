import React, { useState, useEffect, useCallback } from "react"
import countryList from 'react-select-country-list'

import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import Button from 'react-bulma-components/lib/components/button';
import {
    Field,
    Input,
    Label,
    Select
} from 'react-bulma-components/lib/components/form'

import SideNavAccount from '../components/sideNavAccount'

export default function AccountSettings() {
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
    const [pk, setPk] = useState('')

    var containerStyle = {
        margin: '3% auto',
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
                    setPhone2(json.phone_number_2)
                    setPhone2Type(json.phone_number_2_type)
                    setAddressLine1(json.address_line_1)
                    setAddressLine2(json.address_line_2)
                    setCity(json.city)
                    setCountry(json.country)
                    setState(json.state)
                    setZipcode(json.zipcode)
                    setPk(json.id)
                    localStorage.setItem('user-id', json.id)
                })
        }
    }, [])

    const editInformation = useCallback(() => {
        // Edit user's information. First_name, last_name, and email are required. 
        var url = '/edit-user/' + pk + '/'
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
        myHeaders.append('id', pk)

        var formdata = new FormData();
        formdata.append('first_name', firstName)
        formdata.append('last_name', lastName)
        formdata.append('email', email)
        formdata.append('phone_number_1', phone1)
        formdata.append('phone_number_1_type', phone1Type)
        formdata.append('phone_number_2', phone2)
        formdata.append('phone_number_2_type', phone2Type)
        formdata.append('address_line_1', addressLine1)
        formdata.append('address_line_2', addressLine2)
        formdata.append('city', city)
        formdata.append('state', state)
        formdata.append('zipcode', zipcode)
        formdata.append('country', country)

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        }

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            window.location.reload()
        })
        .catch(error => console.log('error', error))
    }, 
    [
        firstName,
        lastName, 
        email, 
        phone1, 
        phone1Type, 
        phone2, 
        phone2Type, 
        addressLine1, 
        addressLine2, 
        city, 
        state, 
        zipcode, 
        country,
        pk
    ])


    return (
        <Container style={containerStyle}>
            <Columns>
                <Columns.Column style={{ maxWidth: '30%' }}>
                    <SideNavAccount />
                </Columns.Column>
                <Columns.Column>

                    {/* Account Information  */}
                    <Heading size={4} style={{ marginBottom: '3%' }}>Account Information</Heading>
                    <Columns>
                        <Columns.Column>
                            <Field>
                                <Label>First Name<span style={{ color: '#F83D34' }}>*</span></Label>
                                <Input
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder={firstName}
                                />
                            </Field>
                        </Columns.Column>
                        <Columns.Column>
                            <Field>
                                <Label>Last Name<span style={{ color: '#F83D34' }}>*</span></Label>
                                <Input
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder={lastName}
                                />
                            </Field>
                        </Columns.Column>
                        </Columns>
                        <Field>
                            <Label>Email<span style={{ color: '#F83D34' }}>*</span></Label>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={email}
                            />
                        </Field>  
                        <Columns>
                            <Columns.Column>
                                <Field>
                                    <Label>Primary Phone Number<span style={{ color: '#F83D34' }}>*</span></Label>
                                    <Input
                                        value={phone1}
                                        onChange={(e) => setPhone1(e.target.value)}
                                        placeholder={phone1}
                                    />
                                </Field>
                            </Columns.Column>
                            <Columns.Column>
                                <Field>
                                    <Label>Primary Phone Number Type<span style={{ color: '#F83D34' }}>*</span></Label>
                                    <Select onChange={(e) => setPhone1Type(e.target.value)} value={phone1Type}>
                                        <option>Mobile</option>
                                        <option>Home</option>
                                        <option>Work</option>
                                    </Select>
                                </Field>
                            </Columns.Column>
                        </Columns>      
                        <Columns>
                            <Columns.Column>
                                <Field>
                                    <Label>Secondary Phone Number</Label>
                                    <Input
                                        value={phone2}
                                        onChange={(e) => setPhone2(e.target.value)}
                                        placeholder={phone2}
                                    />
                                </Field>
                            </Columns.Column>
                            <Columns.Column>
                                <Field>
                                    <Label>Secondary Phone Number Type</Label>
                                    <Select onChange={(e) => setPhone2Type(e.target.value)} value={phone2Type}>
                                        <option></option>
                                        <option>Mobile</option>
                                        <option>Home</option>
                                        <option>Work</option>
                                    </Select>
                                </Field>
                            </Columns.Column>
                        </Columns> 
                        <Columns>
                            <Columns.Column>
                                <Field>
                                    <Label>Address Line 1<span style={{ color: '#F83D34' }}>*</span></Label>
                                    <Input
                                        value={addressLine1}
                                        onChange={(e) => setAddressLine1(e.target.value)}
                                        placeholder={addressLine1}
                                    />
                                </Field>
                            </Columns.Column>
                            <Columns.Column>
                                <Field>
                                    <Label>Address Line 2</Label>
                                    <Input
                                        value={addressLine2}
                                        onChange={(e) => setAddressLine2(e.target.value)}
                                        placeholder={addressLine2}
                                    />
                                </Field>
                            </Columns.Column>
                        </Columns> 
                        <Columns>
                            <Columns.Column>
                                <Field>
                                    <Label>City<span style={{ color: '#F83D34' }}>*</span></Label>
                                    <Input
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder={city}
                                    />
                                </Field>
                            </Columns.Column>
                            <Columns.Column>
                                <Field>
                                    <Label>State<span style={{ color: '#F83D34' }}>*</span></Label>
                                    <Input
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        placeholder={state}
                                    />
                                </Field>
                            </Columns.Column>
                            <Columns.Column>
                                <Field>
                                    <Label>Zipcode<span style={{ color: '#F83D34' }}>*</span></Label>
                                    <Input
                                        value={zipcode}
                                        onChange={(e) => setZipcode(e.target.value)}
                                        placeholder={zipcode}
                                    />
                                </Field>
                            </Columns.Column>
                        </Columns>
                        <Field>
                            <Label>Country<span style={{ color: '#F83D34' }}>*</span></Label>
                            <Select onChange={(e) => setCountry(e.target.value)} value={country}>
                                {countryList()
                                    .getLabels()
                                    .map((c) => (
                                        <option style={{ position: 'static' }} value={c}>
                                            {c}
                                        </option>
                                ))}
                            </Select>
                        </Field>
                    <Button 
                        color="primary" 
                        fullwidth={true} 
                        style={{maxWidth: '40%', marginTop: '8%'}} 
                        onClick={() => editInformation()}
                    >
                        SAVE CHANGES
                    </Button>
                </Columns.Column>
            </Columns>
        </Container>
    );
}