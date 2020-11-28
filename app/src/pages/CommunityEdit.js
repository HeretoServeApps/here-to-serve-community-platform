import React, { useState, useEffect, useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

import Container from 'react-bulma-components/lib/components/container'
import Columns from 'react-bulma-components/lib/components/columns'
import Heading from 'react-bulma-components/lib/components/heading'
import Modal from 'react-bulma-components/lib/components/modal'
import Section from 'react-bulma-components/lib/components/section'
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

    let history = useHistory()

    const [communityName, setCommunityName] = useState('')
    const [communityDescription, setCommunityDescription] = useState('')
    const [communityZipcode, setCommunityZipcode] = useState('')
    const [homePageHighlight, setHomePageHighlight] = useState('')
    const [showLeaders, setShowLeaders] = useState(true)
    const [communityTimezone, setCommunityTimezone] = useState('')
    const [communityVisibility, setCommunityVisibility] = useState(true)
    const pk = localStorage.getItem('community-id')

    // Homepage image
    const [photoFile, setPhotoFile] = useState('')
    const [photoURL, setPhotoURL] = useState('')

    const timeZones = [
        'Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers', 'Africa/Asmara', 'Africa/Asmera', 'Africa/Bamako', 'Africa/Bangui', 'Africa/Banjul', 'Africa/Bissau', 'Africa/Blantyre', 'Africa/Brazzaville', 'Africa/Bujumbura', 'Africa/Cairo', 'Africa/Casablanca', 'Africa/Ceuta', 'Africa/Conakry', 'Africa/Dakar', 'Africa/Dar_es_Salaam', 'Africa/Djibouti', 'Africa/Douala', 'Africa/El_Aaiun', 'Africa/Freetown', 'Africa/Gaborone', 'Africa/Harare', 'Africa/Johannesburg', 'Africa/Juba', 'Africa/Kampala', 'Africa/Khartoum', 'Africa/Kigali', 'Africa/Kinshasa', 'Africa/Lagos', 'Africa/Libreville', 'Africa/Lome', 'Africa/Luanda', 'Africa/Lubumbashi', 'Africa/Lusaka', 'Africa/Malabo', 'Africa/Maputo', 'Africa/Maseru', 'Africa/Mbabane', 'Africa/Mogadishu', 'Africa/Monrovia', 'Africa/Nairobi', 'Africa/Ndjamena', 'Africa/Niamey', 'Africa/Nouakchott', 'Africa/Ouagadougou', 'Africa/Porto-Novo', 'Africa/Sao_Tome', 'Africa/Timbuktu', 'Africa/Tripoli', 'Africa/Tunis', 'Africa/Windhoek', 'America/Adak', 'America/Anchorage', 'America/Anguilla', 'America/Antigua', 'America/Araguaina', 'America/Argentina/Buenos_Aires', 'America/Argentina/Catamarca', 'America/Argentina/ComodRivadavia', 'America/Argentina/Cordoba', 'America/Argentina/Jujuy', 'America/Argentina/La_Rioja', 'America/Argentina/Mendoza', 'America/Argentina/Rio_Gallegos', 'America/Argentina/Salta', 'America/Argentina/San_Juan', 'America/Argentina/San_Luis', 'America/Argentina/Tucuman', 'America/Argentina/Ushuaia', 'America/Aruba', 'America/Asuncion', 'America/Atikokan', 'America/Atka', 'America/Bahia', 'America/Bahia_Banderas', 'America/Barbados', 'America/Belem', 'America/Belize', 'America/Blanc-Sablon', 'America/Boa_Vista', 'America/Bogota', 'America/Boise', 'America/Buenos_Aires', 'America/Cambridge_Bay', 'America/Campo_Grande', 'America/Cancun', 'America/Caracas', 'America/Catamarca', 'America/Cayenne', 'America/Cayman', 'America/Chicago', 'America/Chihuahua', 'America/Coral_Harbour', 'America/Cordoba', 'America/Costa_Rica', 'America/Creston', 'America/Cuiaba', 'America/Curacao', 'America/Danmarkshavn', 'America/Dawson', 'America/Dawson_Creek', 'America/Denver', 'America/Detroit', 'America/Dominica', 'America/Edmonton', 'America/Eirunepe', 'America/El_Salvador', 'America/Ensenada', 'America/Fort_Nelson', 'America/Fort_Wayne', 'America/Fortaleza', 'America/Glace_Bay', 'America/Godthab', 'America/Goose_Bay', 'America/Grand_Turk', 'America/Grenada', 'America/Guadeloupe', 'America/Guatemala', 'America/Guayaquil', 'America/Guyana', 'America/Halifax', 'America/Havana', 'America/Hermosillo', 'America/Indiana/Indianapolis', 'America/Indiana/Knox', 'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Tell_City', 'America/Indiana/Vevay', 'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Indianapolis', 'America/Inuvik', 'America/Iqaluit', 'America/Jamaica', 'America/Jujuy', 'America/Juneau', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello', 'America/Knox_IN', 'America/Kralendijk', 'America/La_Paz', 'America/Lima', 'America/Los_Angeles', 'America/Louisville', 'America/Lower_Princes', 'America/Maceio', 'America/Managua', 'America/Manaus', 'America/Marigot', 'America/Martinique', 'America/Matamoros', 'America/Mazatlan', 'America/Mendoza', 'America/Menominee', 'America/Merida', 'America/Metlakatla', 'America/Mexico_City', 'America/Miquelon', 'America/Moncton', 'America/Monterrey', 'America/Montevideo', 'America/Montreal', 'America/Montserrat', 'America/Nassau', 'America/New_York', 'America/Nipigon', 'America/Nome', 'America/Noronha', 'America/North_Dakota/Beulah', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem', 'America/Ojinaga', 'America/Panama', 'America/Pangnirtung', 'America/Paramaribo', 'America/Phoenix', 'America/Port-au-Prince', 'America/Port_of_Spain', 'America/Porto_Acre', 'America/Porto_Velho', 'America/Puerto_Rico', 'America/Punta_Arenas', 'America/Rainy_River', 'America/Rankin_Inlet', 'America/Recife', 'America/Regina', 'America/Resolute', 'America/Rio_Branco', 'America/Rosario', 'America/Santa_Isabel', 'America/Santarem', 'America/Santiago', 'America/Santo_Domingo', 'America/Sao_Paulo', 'America/Scoresbysund', 'America/Shiprock', 'America/Sitka', 'America/St_Barthelemy', 'America/St_Johns', 'America/St_Kitts', 'America/St_Lucia', 'America/St_Thomas', 'America/St_Vincent', 'America/Swift_Current', 'America/Tegucigalpa', 'America/Thule', 'America/Thunder_Bay', 'America/Tijuana', 'America/Toronto', 'America/Tortola', 'America/Vancouver', 'America/Virgin', 'America/Whitehorse', 'America/Winnipeg', 'America/Yakutat', 'America/Yellowknife', 'Antarctica/Casey', 'Antarctica/Davis', 'Antarctica/DumontDUrville', 'Antarctica/Macquarie', 'Antarctica/Mawson', 'Antarctica/McMurdo', 'Antarctica/Palmer', 'Antarctica/Rothera', 'Antarctica/South_Pole', 'Antarctica/Syowa', 'Antarctica/Troll', 'Antarctica/Vostok', 'Arctic/Longyearbyen', 'Asia/Aden', 'Asia/Almaty', 'Asia/Amman', 'Asia/Anadyr', 'Asia/Aqtau', 'Asia/Aqtobe', 'Asia/Ashgabat', 'Asia/Ashkhabad', 'Asia/Atyrau', 'Asia/Baghdad', 'Asia/Bahrain', 'Asia/Baku', 'Asia/Bangkok', 'Asia/Barnaul', 'Asia/Beirut', 'Asia/Bishkek', 'Asia/Brunei', 'Asia/Calcutta', 'Asia/Chita', 'Asia/Choibalsan', 'Asia/Chongqing', 'Asia/Chungking', 'Asia/Colombo', 'Asia/Dacca', 'Asia/Damascus', 'Asia/Dhaka', 'Asia/Dili', 'Asia/Dubai', 'Asia/Dushanbe', 'Asia/Famagusta', 'Asia/Gaza', 'Asia/Harbin', 'Asia/Hebron', 'Asia/Ho_Chi_Minh', 'Asia/Hong_Kong', 'Asia/Hovd', 'Asia/Irkutsk', 'Asia/Istanbul', 'Asia/Jakarta', 'Asia/Jayapura', 'Asia/Jerusalem', 'Asia/Kabul', 'Asia/Kamchatka', 'Asia/Karachi', 'Asia/Kashgar', 'Asia/Kathmandu', 'Asia/Katmandu', 'Asia/Khandyga', 'Asia/Kolkata', 'Asia/Krasnoyarsk', 'Asia/Kuala_Lumpur', 'Asia/Kuching', 'Asia/Kuwait', 'Asia/Macao', 'Asia/Macau', 'Asia/Magadan', 'Asia/Makassar', 'Asia/Manila', 'Asia/Muscat', 'Asia/Nicosia', 'Asia/Novokuznetsk', 'Asia/Novosibirsk', 'Asia/Omsk', 'Asia/Oral', 'Asia/Phnom_Penh', 'Asia/Pontianak', 'Asia/Pyongyang', 'Asia/Qatar', 'Asia/Qostanay', 'Asia/Qyzylorda', 'Asia/Rangoon', 'Asia/Riyadh', 'Asia/Saigon', 'Asia/Sakhalin', 'Asia/Samarkand', 'Asia/Seoul', 'Asia/Shanghai', 'Asia/Singapore', 'Asia/Srednekolymsk', 'Asia/Taipei', 'Asia/Tashkent', 'Asia/Tbilisi', 'Asia/Tehran', 'Asia/Tel_Aviv', 'Asia/Thimbu', 'Asia/Thimphu', 'Asia/Tokyo', 'Asia/Tomsk', 'Asia/Ujung_Pandang', 'Asia/Ulaanbaatar', 'Asia/Ulan_Bator', 'Asia/Urumqi', 'Asia/Ust-Nera', 'Asia/Vientiane', 'Asia/Vladivostok', 'Asia/Yakutsk', 'Asia/Yangon', 'Asia/Yekaterinburg', 'Asia/Yerevan', 'Atlantic/Azores', 'Atlantic/Bermuda', 'Atlantic/Canary', 'Atlantic/Cape_Verde', 'Atlantic/Faeroe', 'Atlantic/Faroe', 'Atlantic/Jan_Mayen', 'Atlantic/Madeira', 'Atlantic/Reykjavik', 'Atlantic/South_Georgia', 'Atlantic/St_Helena', 'Atlantic/Stanley', 'Australia/ACT', 'Australia/Adelaide', 'Australia/Brisbane', 'Australia/Broken_Hill', 'Australia/Canberra', 'Australia/Currie', 'Australia/Darwin', 'Australia/Eucla', 'Australia/Hobart', 'Australia/LHI', 'Australia/Lindeman', 'Australia/Lord_Howe', 'Australia/Melbourne', 'Australia/NSW', 'Australia/North', 'Australia/Perth', 'Australia/Queensland', 'Australia/South', 'Australia/Sydney', 'Australia/Tasmania', 'Australia/Victoria', 'Australia/West', 'Australia/Yancowinna', 'Brazil/Acre', 'Brazil/DeNoronha', 'Brazil/East', 'Brazil/West', 'CET', 'CST6CDT', 'Canada/Atlantic', 'Canada/Central', 'Canada/Eastern', 'Canada/Mountain', 'Canada/Newfoundland', 'Canada/Pacific', 'Canada/Saskatchewan', 'Canada/Yukon', 'Chile/Continental', 'Chile/EasterIsland', 'Cuba', 'EET', 'EST5EDT', 'Egypt', 'Eire', 'Etc/GMT', 'Etc/GMT+0', 'Etc/GMT+1', 'Etc/GMT+10', 'Etc/GMT+11', 'Etc/GMT+12', 'Etc/GMT+2', 'Etc/GMT+3', 'Etc/GMT+4', 'Etc/GMT+5', 'Etc/GMT+6', 'Etc/GMT+7', 'Etc/GMT+8', 'Etc/GMT+9', 'Etc/GMT-0', 'Etc/GMT-1', 'Etc/GMT-10', 'Etc/GMT-11', 'Etc/GMT-12', 'Etc/GMT-13', 'Etc/GMT-14', 'Etc/GMT-2', 'Etc/GMT-3', 'Etc/GMT-4', 'Etc/GMT-5', 'Etc/GMT-6', 'Etc/GMT-7', 'Etc/GMT-8', 'Etc/GMT-9', 'Etc/GMT0', 'Etc/Greenwich', 'Etc/UCT', 'Etc/UTC', 'Etc/Universal', 'Etc/Zulu', 'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Astrakhan', 'Europe/Athens', 'Europe/Belfast', 'Europe/Belgrade', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels', 'Europe/Bucharest', 'Europe/Budapest', 'Europe/Busingen', 'Europe/Chisinau', 'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Gibraltar', 'Europe/Guernsey', 'Europe/Helsinki', 'Europe/Isle_of_Man', 'Europe/Istanbul', 'Europe/Jersey', 'Europe/Kaliningrad', 'Europe/Kiev', 'Europe/Kirov', 'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/London', 'Europe/Luxembourg', 'Europe/Madrid', 'Europe/Malta', 'Europe/Mariehamn', 'Europe/Minsk', 'Europe/Monaco', 'Europe/Moscow', 'Europe/Nicosia', 'Europe/Oslo', 'Europe/Paris', 'Europe/Podgorica', 'Europe/Prague', 'Europe/Riga', 'Europe/Rome', 'Europe/Samara', 'Europe/San_Marino', 'Europe/Sarajevo', 'Europe/Saratov', 'Europe/Simferopol', 'Europe/Skopje', 'Europe/Sofia', 'Europe/Stockholm', 'Europe/Tallinn', 'Europe/Tirane', 'Europe/Tiraspol', 'Europe/Ulyanovsk', 'Europe/Uzhgorod', 'Europe/Vaduz', 'Europe/Vatican', 'Europe/Vienna', 'Europe/Vilnius', 'Europe/Volgograd', 'Europe/Warsaw', 'Europe/Zagreb', 'Europe/Zaporozhye', 'Europe/Zurich', 'GB', 'GB-Eire', 'GMT', 'GMT0', 'Greenwich', 'Hongkong', 'Iceland', 'Indian/Antananarivo', 'Indian/Chagos', 'Indian/Christmas', 'Indian/Cocos', 'Indian/Comoro', 'Indian/Kerguelen', 'Indian/Mahe', 'Indian/Maldives', 'Indian/Mauritius', 'Indian/Mayotte', 'Indian/Reunion', 'Iran', 'Israel', 'Jamaica', 'Japan', 'Kwajalein', 'Libya', 'MET', 'MST7MDT', 'Mexico/BajaNorte', 'Mexico/BajaSur', 'Mexico/General', 'NZ', 'NZ-CHAT', 'Navajo', 'PRC', 'PST8PDT', 'Pacific/Apia', 'Pacific/Auckland', 'Pacific/Bougainville', 'Pacific/Chatham', 'Pacific/Chuuk', 'Pacific/Easter', 'Pacific/Efate', 'Pacific/Enderbury', 'Pacific/Fakaofo', 'Pacific/Fiji', 'Pacific/Funafuti', 'Pacific/Galapagos', 'Pacific/Gambier', 'Pacific/Guadalcanal', 'Pacific/Guam', 'Pacific/Honolulu', 'Pacific/Johnston', 'Pacific/Kiritimati', 'Pacific/Kosrae', 'Pacific/Kwajalein', 'Pacific/Majuro', 'Pacific/Marquesas', 'Pacific/Midway', 'Pacific/Nauru', 'Pacific/Niue', 'Pacific/Norfolk', 'Pacific/Noumea', 'Pacific/Pago_Pago', 'Pacific/Palau', 'Pacific/Pitcairn', 'Pacific/Pohnpei', 'Pacific/Ponape', 'Pacific/Port_Moresby', 'Pacific/Rarotonga', 'Pacific/Saipan', 'Pacific/Samoa', 'Pacific/Tahiti', 'Pacific/Tarawa', 'Pacific/Tongatapu', 'Pacific/Truk', 'Pacific/Wake', 'Pacific/Wallis', 'Pacific/Yap', 'Poland', 'Portugal', 'ROK', 'Singapore', 'SystemV/AST4', 'SystemV/AST4ADT', 'SystemV/CST6', 'SystemV/CST6CDT', 'SystemV/EST5', 'SystemV/EST5EDT', 'SystemV/HST10', 'SystemV/MST7', 'SystemV/MST7MDT', 'SystemV/PST8', 'SystemV/PST8PDT', 'SystemV/YST9', 'SystemV/YST9YDT', 'Turkey', 'UCT', 'US/Alaska', 'US/Aleutian', 'US/Arizona', 'US/Central', 'US/East-Indiana', 'US/Eastern', 'US/Hawaii', 'US/Indiana-Starke', 'US/Michigan', 'US/Mountain', 'US/Pacific', 'US/Pacific-New', 'US/Samoa', 'UTC', 'Universal', 'W-SU', 'WET', 'Zulu'
    ]

    const [showRemoveModal, setShowRemoveModel] = useState(false)

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
                    setShowLeaders(response.data[0].display_leaders_on_home_page === 'true')
                    setPhotoFile(response.data[0].photo_file)
                    setCommunityVisibility(response.data[0].is_closed === 'true')
                    setCommunityTimezone(response.data[0].community_time_zone)
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
        formdata.append('home_page_highlight', homePageHighlight)
        formdata.append('display_leaders_on_home_page', showLeaders.toString())
        formdata.append('is_closed', communityVisibility.toString())
        if (photoURL)
            formdata.append('photo_file', photoFile)

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


    const removeCommunity = useCallback(() => {
        var myHeaders = new Headers()
        myHeaders.append('Authorization', `JWT ${localStorage.getItem('token')}`)

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
        }

        fetch('/edit-community/' + pk, requestOptions)
        .then(_ => history.push('/my-communities'))
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
                                <Select
                                    name='Timezone'
                                    value={communityTimezone}
                                    onChange={(e) => setCommunityTimezone(e.target.value)}
                                    >
                                    {timeZones.map((zone) => (
                                        <option>
                                            {zone}
                                        </option>
                                    ))}
                                </Select>
                            </Control>
                        </Field>
                        <Field>
                            <Label>
                                Community Visibility
                            </Label>
                            <CheckboxField
                                checked={communityVisibility}
                                text={'Allow friends and family to find this community by name and/or postal code.'}
                                onChange={(e) => setCommunityVisibility(e.target.checked)}
                            />
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
                            <p style={{ fontSize: '80%' }} className='has-text-grey'>
                                This is what will show in the middle section of the community's home page.
                            </p>
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
                        <Columns style={{ marginTop: '5%' }}>
                            <Columns.Column size={3}>
                                <Link to='/community-home'>
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
                                </Link>
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
                            <Columns.Column size={3}>
                                <Button
                                    style={{
                                        marginBottom: '1rem',
                                        boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                                    }}
                                    color='danger'
                                    fullwidth={true}
                                    onClick={() => setShowRemoveModel(true)}
                                >
                                    Shutdown Community
                                </Button>     
                            </Columns.Column>
                        </Columns>
                    </Columns.Column>
                </Columns>
            </Container>

            <Modal
                show={showRemoveModal}
                onClose={() => setShowRemoveModel(false)}
                closeOnBlur={true}
            >
                <Modal.Card>
                    <Modal.Card.Head onClose={() => setShowRemoveModel(false)}>
                        <Modal.Card.Title>Remove "{communityName}" Community</Modal.Card.Title>
                    </Modal.Card.Head>
                        <Section style={{ backgroundColor: 'white' }}>
                            Are you sure you want to shutdown this community? You can't undo
                            this action.
                        </Section>
                    <Modal.Card.Foot
                        style={{
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        >
                        <Button onClick={() => setShowRemoveModel(false)}>
                            Cancel
                        </Button>
                        <Button color='primary' onClick={() => removeCommunity()}>
                            Shutdown Community
                        </Button>
                    </Modal.Card.Foot>
                </Modal.Card>
            </Modal>
        </div>
    )
}