import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import countryList from 'react-select-country-list'

import Heading from 'react-bulma-components/lib/components/heading'
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button'
import Columns from 'react-bulma-components/lib/components/columns'
import {
  Field,
  Control,
  Input,
  Select,
  Label
} from 'react-bulma-components/lib/components/form'

import CommunityNavbar from '../components/communityNavbar'

export default function CommunityOneMember(props) {
    var containerStyle = {
        margin: '5% auto',
        maxWidth: '600px',
        padding: '2rem',
        border: '0.1rem solid #E5E5E5',
        borderRadius: '1rem'
    }

    const [isEditing, setIsEditing] = useState(false)
    const [isRemoving, setIsRemoving] = useState(false)
    const [newFirstName, setNewFirstName] = useState(props.location.state ? props.location.state.first_name : '')
    const [newLastName, setNewLastName] = useState(props.location.state ? props.location.state.last_name : '')
    const [newEmail, setNewEmail] = useState(props.location.state ? props.location.state.email : '')
    const [newPhoneNumber1, setNewPhoneNumber1] = useState(props.location.state ? props.location.state.phone_number_1 : '')
    const [newPhoneNumber1Type, setNewPhoneNumber1Type] = useState(props.location.state ? props.location.state.phone_number_1_type : '')
    const [newPhoneNumber2, setNewPhoneNumber2] = useState(props.location.state ? props.location.state.phone_number_2 : '')
    const [newPhoneNumber2Type, setNewPhoneNumber2Type] = useState(props.location.state ? props.location.state.phone_number_2_type : '')
    const [newAddressLine1, setNewAddressLine1] = useState(props.location.state ? props.location.state.address_line_1 : '')
    const [newAddressLine2, setNewAddressLine2] = useState(props.location.state ? props.location.state.address_line_2 : '')
    const [newCity, setNewCity] = useState(props.location.state ? props.location.state.city : '')
    const [newState, setNewState] = useState(props.location.state ? props.location.state.state : '')
    const [newZipcode, setNewZipcode] = useState(props.location.state ? props.location.state.zipcode : '')
    const [newCountry, setNewCountry] = useState(props.location.state ? props.location.state.country : '')
    const [newRole, setNewRole] = useState(props.location.state ? props.location.state.role : '')
    const [pk, setUserPk] = useState(props.location.state ? props.location.state.pk : -1)
    const [validForm, setValidForm] = useState(false)
    let history = useHistory()


    const removeMember = useCallback(() => {
        var url = '/edit-user/' + pk + '/'
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
        myHeaders.append('id', pk)

        var formdata = new FormData()
        formdata.append('first_name', newFirstName)
        formdata.append('last_name', newLastName)
        formdata.append('email', newEmail)

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        }

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => history.push('/community-people'))
        .catch(error => console.log('error', error));
    })

    const editMember = useCallback(() => {
        // Edit user's information. First_name, last_name, and email are required. 
        var url = '/edit-user/' + pk + '/'
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
        myHeaders.append('id', pk)

        var formdata = new FormData();
        formdata.append('first_name', newFirstName)
        formdata.append('last_name', newLastName)
        formdata.append('email', newEmail)
        formdata.append('phone_number_1', newPhoneNumber1)
        formdata.append('phone_number_1_type', newPhoneNumber1Type)
        formdata.append('phone_number_2', newPhoneNumber2)
        formdata.append('phone_number_2_type', newPhoneNumber2Type)
        formdata.append('address_line_1', newAddressLine1)
        formdata.append('address_line_2', newAddressLine2)
        formdata.append('city', newCity)
        formdata.append('state', newState)
        formdata.append('zipcode', newZipcode)
        formdata.append('country', newCountry)

        // Edit user's role in the community
        // formdata.append('role', newRole)
        // formdata.append('community', localStorage.getItem('community-name'))

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        }

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => 
            history.push('/community-people')
        )
        .catch(error => console.log('error', error))
    })

    useEffect(() => {
        const formValues = [newEmail]
        const notValidForm =
        formValues.some((formVal) => {
            return formVal === localStorage.getItem('email')
        })
        setValidForm(notValidForm)
    }, [newEmail])

    if(isEditing) {
        return (
            <div>
                <CommunityNavbar />
                <Card style={containerStyle}>
                    <Media>
                        <Media.Item>
                            <Heading size={4}>Edit Profile</Heading>
                        </Media.Item>
                    </Media>


                    <Heading size={6}>Basic Information</Heading>
                    <Columns>
                        <Columns.Column>
                            <Field>         
                                <Label>First name</Label>
                                <Control>
                                <Input
                                    name="First Name" placeholder={newFirstName} value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}
                                />
                                </Control>
                            </Field>
                        </Columns.Column>
                        <Columns.Column>
                        <Field>         
                            <Label>Last name</Label>
                            <Control>
                            <Input
                                name="Last Name" placeholder={newLastName} value={newLastName} onChange={(e) => setNewLastName(e.target.value)}
                            />
                            </Control>
                        </Field>
                        </Columns.Column>
                    </Columns>
                    <Field>
                        <Label>Role</Label>
                        <Control>
                        <Select onChange={(e) => setNewRole(e.target.value)} name="role" value={newRole}>
                            <option>Community Member</option>
                            <option>Coordinator</option>
                            <option>Community Leader</option>
                        </Select>
                        </Control>
                    </Field> 


                    <Heading size={6} style={{marginTop: '8%'}}>Contact Info</Heading>
                    <Field>         
                        <Label>Email</Label>
                        <Control>
                        <Input
                            name="Email" type="email" placeholder={newEmail} value={newEmail} onChange={(e) => setNewEmail(e.target.value)}
                        />
                        </Control>
                    </Field>
                    <Columns>
                        <Columns.Column>
                            <Field>
                                <Label>Primary Phone Number</Label>
                                <Control>
                                <Input
                                    value={newPhoneNumber1}
                                    onChange={(e) => setNewPhoneNumber1(e.target.value)}
                                    placeholder={newPhoneNumber1}
                                />
                                </Control>
                            </Field>
                        </Columns.Column>
                        <Columns.Column>
                            <Label>Type</Label>
                            <Field>
                                <Control>
                                <Select onChange={(e) => setNewPhoneNumber1Type(e.target.value)} name="phoneNumber1Type" value={newPhoneNumber1Type}>
                                    <option>Mobile</option>
                                    <option>Home</option>
                                    <option>Work</option>
                                </Select>
                                </Control>
                            </Field>
                        </Columns.Column>
                    </Columns>
                    <Columns>
                        <Columns.Column>
                            <Field>
                                <Label>Secondary Phone Number</Label>
                                <Control>
                                <Input
                                    value={newPhoneNumber2}
                                    onChange={(e) => setNewPhoneNumber2(e.target.value)}
                                    placeholder={newPhoneNumber2}
                                />
                                </Control>
                            </Field>
                        </Columns.Column>
                        <Columns.Column>
                            <Label>Type</Label>
                            <Field>
                                <Control>
                                <Select onChange={(e) => setNewPhoneNumber2Type(e.target.value)} name="phoneNumber2Type" value={newPhoneNumber2Type}>
                                    <option>Mobile</option>
                                    <option>Home</option>
                                    <option>Work</option>
                                </Select>
                                </Control>
                            </Field>
                        </Columns.Column>
                    </Columns>

                    <Field>         
                        <Label>Address line 1</Label>
                        <Control>
                        <Input
                            name="Adress line 1" placeholder={newAddressLine1} value={newAddressLine1} onChange={(e) => setNewAddressLine1(e.target.value)}
                        />
                        </Control>
                    </Field>
                    <Field>         
                        <Label>Address line 2</Label>
                        <Control>
                        <Input
                            name="Adress line 2" placeholder={newAddressLine2} value={newAddressLine2} onChange={(e) => setNewAddressLine2(e.target.value)}
                        />
                        </Control>
                    </Field>
                    <Field>         
                        <Label>City/Town</Label>
                        <Control>
                        <Input
                            name="city" placeholder={newCity} value={newCity} onChange={(e) => setNewCity(e.target.value)}
                        />
                        </Control>
                    </Field>
                    
                    <Columns>
                        <Columns.Column>
                            <Field>         
                                <Label>State</Label>
                                <Control>
                                <Input
                                    name="state" placeholder={newState} value={newState} onChange={(e) => setNewState(e.target.value)}
                                />
                                </Control>
                            </Field>
                        </Columns.Column>
                        <Columns.Column>
                            <Field>         
                                <Label>Zipcode</Label>
                                <Control>
                                <Input
                                    name="zipcode" placeholder={newZipcode} value={newZipcode} onChange={(e) => setNewZipcode(e.target.value)}
                                />
                                </Control>
                            </Field>
                        </Columns.Column>
                    </Columns>
                    <Field>         
                        <Label>Country</Label>
                        <Select
                            name='country'
                            value={newCountry}
                            onChange={(e) => setNewCountry(e.target.value)}
                        >
                            {countryList()
                            .getLabels()
                            .map((c) => (
                                <option style={{ position: 'static' }} value={c}>
                                {c}
                                </option>
                            ))}
                        </Select>
                    </Field>        

                    <Columns style={{marginTop: '5%'}}>
                        <Columns.Column size={6}>
                            <Button
                                className='is-primary is-inverted'
                                onClick={() => setIsEditing(false)}
                                style={{
                                    marginBottom: '1rem',
                                    boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                }}
                                fullwidth={true}
                            >
                                Cancel
                            </Button>
                        </Columns.Column>
                        <Columns.Column size={6}>
                            <Button
                                onClick={() => editMember()}
                                style={{
                                    marginBottom: '1rem',
                                    boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                }}
                                fullwidth={true}
                                color='primary'
                                disabled={validForm}
                            >
                                Save
                            </Button>
                        </Columns.Column>
                    </Columns>
                </Card>
            </div>
        )
    }

    if(isRemoving) {
        return (
            <div>
                <CommunityNavbar />
                    <Card style={containerStyle}>
                        <Content>
                            <p>
                                Are you sure you want to remove {props.location.state.first_name} {props.location.state.last_name} from {localStorage.getItem('community-name')}'s care community?
                            </p>
                        </Content>
                        <Columns>
                            <Columns.Column size={6}>
                                <Button
                                    className='is-primary is-inverted'
                                    onClick={() => setIsRemoving(false)}
                                    style={{
                                        marginBottom: '1rem',
                                        boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                    }}
                                    fullwidth={true}
                                >
                                    Cancel
                                </Button>
                            </Columns.Column>
                            <Columns.Column size={6}>
                                <Button
                                    onClick={() => removeMember()}
                                    style={{
                                        marginBottom: '1rem',
                                        boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                    }}
                                    fullwidth={true}
                                    color='danger'
                                    disabled={validForm}
                                >
                                    Remove
                                </Button>
                            </Columns.Column>
                        </Columns>
                    </Card>
            </div>
        )
    }

    return (
        <div>
            <CommunityNavbar />
            <Card style={containerStyle}>
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading size={4}>{newFirstName} {newLastName}</Heading>
                            <Heading subtitle size={6}>{newRole}</Heading>
                        </Media.Item>
                    </Media>
                    <Content>
                        <p>
                            Phone Number: {newPhoneNumber1}
                            <br />
                            Email: {newEmail}
                        </p>
                    </Content>
                </Card.Content>
                <Columns>
                    <Columns.Column size={6}>
                        <Button
                            style={{
                                marginBottom: '1rem',
                                boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                            }}
                            color='primary'
                            fullwidth={true}
                            onClick={() => setIsEditing(true)}
                            disabled={validForm}
                        >
                            Edit Profile
                        </Button>
                    </Columns.Column>
                    <Columns.Column size={6}>
                        <Button
                            style={{
                                marginBottom: '1rem',
                                boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                            }}
                            color='danger'
                            fullwidth={true}
                            onClick={() => setIsRemoving(true)}
                            disabled={validForm}
                        >
                            Remove User
                        </Button>                       
                    </Columns.Column>
                </Columns>
            </Card>
        </div>
    )
}

CommunityOneMember.propTypes = {
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    phone_number_1: PropTypes.string,
    phone_number_1_type: PropTypes.string,
    phone_number_2: PropTypes.string,
    phone_number_2_type: PropTypes.string,
    address_line_1: PropTypes.string,
    address_line_2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string,
    country: PropTypes.string,
    role: PropTypes.string,
    pk: PropTypes.number,
}

