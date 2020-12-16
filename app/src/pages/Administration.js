import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Columns from 'react-bulma-components/lib/components/columns'

import CommunityNavbar from '../components/communityNavbar'

export default function Administration() {
  var containerStyle = {
    margin: '5% auto',
    maxWidth: '1050px',
    maxHeight: '1000px',
    padding: '4rem',
    border: '0.1rem solid #E5E5E5',
    borderRadius: '1rem',
  }

  return (
    <div>
      <CommunityNavbar />
      <Container style={containerStyle}>
        <Heading size={4}>Administration</Heading>
        <p>
            Community Leaders and Coordinators can use this area to manage member lists and groups, add activities to your Community Calendar, make changes to your site settings, and more. Check out the links below.
        </p>
        <br />
        <Columns>
            <Columns.Column size={4}>
                <Heading size={6}>
                    Members
                </Heading>
                <Link to='/add-people'>
                    Invite Members to your Community 
                </Link>
                <br />
                <br />
                <Link to='/community-people'>
                    View and update Member information
                </Link>
                <br />
                <br />
                <Link to='/join-requests'>
                    Review Members who have requested to join but need your approval
                </Link>
            </Columns.Column>
            <Columns.Column size={4}>
                <Heading size={6}>
                    Help Calendar
                </Heading>
                <Link to='/create-new-activity'>
                    Add a New Activity to the Calendar
                </Link>
                <br />
                <br />
                <Link to='/manage-activities'>
                    Make changes to existing Activities on the Calendar
                </Link>
                <br />
                <br />
                <Link to='/activity-report'>
                    View the Activity Report
                </Link>
            </Columns.Column>
            <Columns.Column size={4}>
                <Heading size={6}>
                    Community
                </Heading>
                <Link to='/custom-sections'>
                    Add and Manage Custom Sections (Blog, Favorites, Recipes)
                </Link>
                <br />
                <br />
                <Link to='/announcements'>
                    Add and Manage Family Updates
                </Link>
                <br />
                <br />
                <Link to='/ways-to-help'>
                    Add and Manage Ways to Help
                </Link>
                <br />
                <br />
                <Link to='/message-board'>
                    Add and Manage Message Board
                </Link>
                <br />
                <br />
                <Link to='/photo-gallery'>
                    Add and Manage PhotoGallery
                </Link>
                <br />
                <br />
                <Link to='/well-wishes'>
                    Add and Manage Well Wishes
                </Link>
                <br />
                <br />
                <Link to='/edit-community'>
                    Make changes to your community (name, description, photo, ...)
                </Link>
            </Columns.Column>
        </Columns>

      </Container>
    </div>
  )
}
