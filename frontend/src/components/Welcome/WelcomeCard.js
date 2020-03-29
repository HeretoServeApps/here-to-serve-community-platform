import React from 'react'
import { Pane, Button, Text, Heading } from 'evergreen-ui'

function WelcomeCard(props) {
    return(
        <Pane margin={20} padding={30} elevation={1} width={500} height={320} borderRadius={10} background="white">
            <Heading size={40}>{props.header}</Heading>
            <br></br>
            <Text size={14} lineHeight={1.5}>{props.text}</Text>
        </Pane>
    )
}

export default WelcomeCard