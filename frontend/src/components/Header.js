import React from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'
import logo from './../images/logo-h2s.svg'

export class Header extends React.Component {
    render() {
        return(<div>
            <Pane display="flex" elevation={2} padding={16} background="tint2" borderRadius={0}>
                <Pane flex={1} alignItems="center" display="flex">
                    <Heading><img height={40} src={logo}></img></Heading>
                </Pane>
                <Pane>
                    {/* Below you can see the marginRight property on a Button. */}
                    <Button marginRight={16}>About Us</Button>
                    <Button appearance="primary">Login or Register</Button>
                </Pane>
            </Pane>
        </div>
        )
    }
}