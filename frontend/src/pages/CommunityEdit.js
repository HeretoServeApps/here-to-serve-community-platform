import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import {
    Input,
    Control,
    Field,
    Label,
    Textarea,
    InputFile,
    Select
} from 'react-bulma-components/lib/components/form'
import Image from 'react-bulma-components/lib/components/image';
import Icon from 'react-bulma-components/lib/components/icon';

import SideBar from '../components/sidebar'
import CommunityNavbar from '../components/communityNavbar'
import CheckboxField from '../components/checkboxfield'

export default function CommunityEdit() {
    var containerStyle = {
        margin: '5% 5%',
        maxWidth: '100%',
    }

    const [communityName, setCommunityName] = useState()
    const [communityDescription, setCommunityDescription] = useState()
    const [communityZipcode, setCommunityZipcode] = useState()

    useEffect(() => {
        axios
            .get('/one-community/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                },
                params: {
                    name: localStorage.getItem('community-name'),
                    zipcode: localStorage.getItem('community-zipcode'),
                    is_closed: localStorage.getItem('community-is-closed'),
                },
            })
            .then(
                (response) => {
                    setCommunityName(response.data[0].name)
                    setCommunityDescription(response.data[0].description)
                    setCommunityZipcode(response.data[0].zipcode)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    return (
        <div>
            <CommunityNavbar />
            <Container style={containerStyle}>
                <Columns isMultiline={true}>
                    <Columns.Column size={3}>
                        <SideBar />
                    </Columns.Column>
                    <Columns.Column size={9}>
                        <Heading size={4}>Community Options</Heading>
                        <Field>
                            <Control>
                                <Label>
                                    Community Name<span className='has-text-danger'>*</span>
                                </Label>
                                <Input
                                    name='Community Name'
                                    value={communityName}
                                    onChange={(e) => setCommunityName(e.target.value)}
                                    placeholder={communityName}
                                />
                                <p style={{ fontSize: '80%' }} className='has-text-grey'>
                                    e.g., Helping Hands of Springfield, Helping Hands for Mary
                                </p>
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Label>
                                    About Our Community<span className='has-text-danger'>*</span>
                                </Label>
                                <Textarea
                                    name='Community Description'
                                    value={communityDescription}
                                    onChange={(e) => setCommunityDescription(e.target.value)}
                                    placeholder={communityDescription}
                                />
                                <p style={{ fontSize: '80%' }} className='has-text-grey'>
                                    This information is shown on your about page and home page
                                </p>
                            </Control>
                        </Field>
                        <Label>
                            Homepage Photo
                        </Label>
                        <div style={{ width: 320, marginBottom: '3%' }}>
                            <Field>
                                <Control>
                                    <InputFile icon={<Icon icon="upload" />} placeholder="Textarea" />
                                </Control>
                            </Field>
                            <Image src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original" size='3by2' />
                        </div>
                        <Field style={{ maxWidth: '30%' }}>
                            <Control>
                                <Label>
                                    ZIP/Postal Code<span className='has-text-danger'>*</span>
                                </Label>
                                <Input
                                    name='Community Zipcode'
                                    value={communityZipcode}
                                    onChange={(e) => setCommunityZipcode(e.target.value)}
                                    placeholder={communityZipcode}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label>
                                Community Visibility<span className='has-text-danger'>*</span>
                            </Label>
                            <CheckboxField text={'Allow friends and family to find this community by name and/or postal code.'} />
                            <p style={{ fontSize: '80%' }} className='has-text-grey'>
                                If disabled, your friends and family will only be able to find your community if they know the community id
                            </p>
                        </Field>

                        <Heading size={4} style={{ marginTop: '5%' }}>Community Home Page</Heading>
                        <Field>
                            <Label>Home Page Highlight<span style={{ color: '#F83D34' }}>*</span></Label>
                            <Control>
                                <Select name='Home Page Highlight' value='Calendar'>
                                    <option>Calendar</option>
                                    <option>Family Updates</option>
                                    <option>Ways to Help</option>
                                    <option>Message Board</option>
                                    <option>Photo Gallery</option>
                                    <option>Well Wishes</option>
                                </Select>
                            </Control>
                        </Field>
                    </Columns.Column>
                </Columns>
            </Container>
        </div>

    )
}