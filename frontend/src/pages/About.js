import React from "react"

import Container from 'react-bulma-components/lib/components/container';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

export default function About() {
    var cardStyle = {
        margin: "2rem auto", 
        width: "50rem",
    }
    return (
        <Container>
            <Card style={cardStyle}>
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading size={4}>Our Mission</Heading>
                        </Media.Item>
                    </Media>
                    <Content>
                        We believe families with a critically-ill child should not have to lose their job, health, 
                        home or enter into bankruptcy to care for their child during a medical crisis. 
                        To help mitigate this, we mobilize people and resources to meet daily living 
                        requirements of families who do not qualify for government assistance.
                    </Content>
                </Card.Content>
            </Card>

            <Card style={cardStyle}>
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading size={4}>Our Vision</Heading>
                        </Media.Item>
                    </Media>
                    <Content>
                        Here to Serve envisions people inspired and mobilized to carry each other’s burdens during times of crisis, 
                        where guidance and assistance is offered freely as people and organizations collaborate to compassionately 
                        respond to those navigating life-threatening health crises. We seek to demystify the plethora of service 
                        organizations and to make them easily accessible, thereby easing the journey of those in medical crisis.
                    </Content>
                </Card.Content>
            </Card>

            <Card style={cardStyle}>
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading size={4}>What We Do</Heading>
                        </Media.Item>
                    </Media>
                    <Content>
                        Here to Serve provides assistance to families caring for a child in a life-or-death health crisis such 
                        as childhood cancer, transplants, critical conditions at birth, accidents, etc. We do this by: 
                        Mobilizing people and resources to meet daily living requirements of families who do not qualify 
                        for government assistance. Building online communities of support, called Care Communities, 
                        that provide a network of services and financial assistance for families with a critically-ill child.

                    </Content>
                </Card.Content>
            </Card>

            <Card style={cardStyle}>
                <Card.Content>
                    <Media>
                        <Media.Item>
                            <Heading size={4}>Our Inspiration</Heading>
                        </Media.Item>
                    </Media>
                    <Content>
                    Here to Serve is dedicated to Silvio Quintas, Bryan Quintas, Phil Carlson and Paul Alindog who exhibited 
                    unimaginable courage, faith and dignity in their battles with cancer and are the inspiration for starting 
                    Here to Serve. Bryan Quintas won his battle with cancer. Silvio, Phil and Paul are home with the Lord. 
                    Because of these valiant warriors, Here to Serve strives to make a difference in the lives of individuals, 
                    families and their caregivers in medical crises.
                    </Content>
                </Card.Content>
            </Card>
        </Container>
    );
}