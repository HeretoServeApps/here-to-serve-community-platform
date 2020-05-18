import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import Container from 'react-bulma-components/lib/components/container'
import Heading from 'react-bulma-components/lib/components/heading'
import Table from 'react-bulma-components/lib/components/table'
import Columns from 'react-bulma-components/lib/components/columns'
import Button from 'react-bulma-components/lib/components/button'

import CommunityNavbar from '../components/communityNavbar'
import PaginationTable from '../components/paginationTable'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 5%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid grey;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`

export default function CommunityPeople() {
    var containerStyle = {
        margin: '5% auto',
        maxWidth: '800px',
        maxHeight: '1000px',
        padding: '4rem',
        border: '0.1rem solid #E5E5E5',
        borderRadius: '1rem'
    }

    const [people, setPeople] = useState([])
    const [userRole, setUserRole] = useState('')

    useEffect(() => {
        axios
            .get('/community-people/', {
                headers: {
                    'Authorization': `JWT ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                params: JSON.stringify({
                    user: localStorage.getItem('email'),
                    community: localStorage.getItem('community-name')
                })
            })
            .then(
                (response) => {
                    setPeople(Array.from(response.data.people))
                    setUserRole(response.data.user_role)       
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    // const header = ["Name", "Role", "Email", "Phone"];
    const columns = React.useMemo(
        () => [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Role',
            accessor: 'role'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone_number'
        }
        ],
        []
    )

    return (
        <div>
            <CommunityNavbar />
            <Container style={containerStyle}>
                <Columns>
                    <Columns.Column size={9}>
                        <Heading size={4}>Community Members</Heading>
                    </Columns.Column>
                    <Columns.Column size={3}>
                        <Button
                            style={{
                                marginBottom: '1rem',
                                boxShadow: '1px 1px 3px 2px rgba(0,0,0,0.1)',
                            }}
                            color='primary'
                        >
                            Add members
                        </Button>
                    </Columns.Column>
                </Columns>
                <Styles>
                    <PaginationTable columns={columns} data={people} />
                </Styles>

            </Container>
        </div>
    )
}
