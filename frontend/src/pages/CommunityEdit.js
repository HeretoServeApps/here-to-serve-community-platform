import React, { useState, useEffect, useCallback } from 'react'
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
import Button from 'react-bulma-components/lib/components/button';

import SideBar from '../components/sidebar'
import CommunityNavbar from '../components/communityNavbar'
import CheckboxField from '../components/checkboxfield'

export default function CommunityEdit() {
    var containerStyle = {
        margin: '5% 5%',
        maxWidth: '100%',
    }

    const [communityName, setCommunityName] = useState('')
    const [communityDescription, setCommunityDescription] = useState('')
    const [communityZipcode, setCommunityZipcode] = useState('')
    const [homePageHighlight, setHomePageHighlight] = useState('')
    const [showLeaders, setShowLeaders] = useState(true)
    const [communityTimezone, setCommunityTimezone] = useState('')
    const pk = localStorage.getItem('community-id')

    // Homepage image
    const [photoFile, setPhotoFile] = useState('')
    const [photoURL, setPhotoURL] = useState('')

    useEffect(() => {
        axios
            .get('/one-community/', {
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                },
                params: {
                    pk: localStorage.getItem('community-id')
                },
            })
            .then(
                (response) => {
                    setCommunityName(response.data[0].name)
                    setCommunityDescription(response.data[0].description)
                    setCommunityZipcode(response.data[0].zipcode)
                    setHomePageHighlight(response.data[0].home_page_highlight)
                    setShowLeaders(response.data[0].display_coordinators_on_home_page)
                    setPhotoFile(response.data[0].photo_file)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    const editCommunity = useCallback(() => {
        var url = '/edit-community/' + pk + '/'
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)
        myHeaders.append('id', pk)

        var formdata = new FormData();
        formdata.append('name', communityName)
        formdata.append('description', communityDescription)
        formdata.append('zipcode', communityZipcode)

        localStorage.setItem('community-name', communityName)
        localStorage.setItem('community-zipcode', communityZipcode)

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        }

        fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => 
            window.location.reload()
        )
        .catch(error => console.log('error', error))
    })

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
                                    Community Name
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
                                    About Our Community
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
                                    <InputFile
                                        value={photoFile}
                                        icon={<Icon icon='upload' />}
                                        onChange={(e) => {
                                            setPhotoURL(URL.createObjectURL(e.target.files[0]))
                                            setPhotoFile(e.target.files[0])
                                        }}
                                        />
                                </Control>
                            </Field>
                            <Image
                                src={photoURL ? photoURL : photoFile}
                            />
                        </div>
                        <Field style={{ maxWidth: '30%' }}>
                            <Control>
                                <Label>
                                    ZIP/Postal Code
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
                            <Label>Community Time Zone</Label>
                            <Control>
                                <Select name='Timezone' value='Pacific Time' onChange={(e) => setCommunityTimezone(e.target.value)}>
                                    <option>Pacific Time</option>
                                </Select>
                            </Control>
                        </Field>
                        <Field>
                            <Label>
                                Community Visibility
                            </Label>
                            <CheckboxField text={'Allow friends and family to find this community by name and/or postal code.'} />
                            <p style={{ fontSize: '80%' }} className='has-text-grey'>
                                If disabled, your friends and family will only be able to find your community if they know the community id
                            </p>
                        </Field>

                        <Heading size={4} style={{ marginTop: '5%' }}>Community Home Page</Heading>
                        <Field>
                            <Label>Home Page Highlight</Label>
                            <Control>
                                <Select name='Home Page Highlight' value={homePageHighlight} onChange={(e) => setHomePageHighlight(e.target.value)}>
                                    <option>Calendar</option>
                                    <option>Family Updates</option>
                                    <option>Ways to Help</option>
                                    <option>Message Board</option>
                                    <option>Photo Gallery</option>
                                    <option>Well Wishes</option>
                                </Select>
                            </Control>
                        </Field>
                        <Field>
                            <Label>
                                Show Coordinators on Home Page
                            </Label>
                            <CheckboxField checked={showLeaders} text={'Display Coordinator list on home page.'} onChange={(e) => setShowLeaders(e.target.checked)} />
                            <p style={{ fontSize: '80%' }} className='has-text-grey'>
                                If checked, Members will see the list of Coordinators under the sections list on your Community home page                            
                            </p>
                        </Field>
                        <Columns style={{marginTop: '5%'}}>
                            <Columns.Column size={3}>
                                <Button
                                    className='is-primary is-inverted'
                                    style={{
                                        marginBottom: '1rem',
                                        boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                    }}
                                    fullwidth={true}
                                >
                                    Cancel
                                </Button>
                            </Columns.Column>
                            <Columns.Column size={3}>
                                <Button
                                    style={{
                                        marginBottom: '1rem',
                                        boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                    }}
                                    fullwidth={true}
                                    color='primary'
                                    onClick={() => editCommunity()}
                                >
                                    Save
                                </Button>
                            </Columns.Column>
                        </Columns>
                    </Columns.Column>
                </Columns>         
            </Container>
        </div>

    )
}