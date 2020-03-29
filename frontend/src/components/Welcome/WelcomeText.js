import React from 'react'

import WelcomeCard from './WelcomeCard'

import { Pane } from "evergreen-ui"

const WelcomeText = () => {
    return(
        <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            background="#2C8595"
        >
            <Pane 
                display="flex"
                alignItems="center"
                paddingTop={25} 
            >
                <WelcomeCard 
                    header="Our Mission" 
                    text="We believe families with a critically-ill child should not have to lose their job, health, home or enter into bankruptcy to care for their child during a medical crisis. To help mitigate this, we mobilize people and resources to meet daily living requirements of families who do not qualify for government assistance.
                    ">
                </WelcomeCard>

                <WelcomeCard 
                    header="Our Vision" 
                    text="Here to Serve envisions people inspired and mobilized to carry each other’s burdens during times of crisis, where guidance and assistance is offered freely as people and organizations collaborate to compassionately respond to those navigating life-threatening health crises. We seek to demystify the plethora of service organizations and to make them easily accessible, thereby easing the journey of those in medical crisis.
                    ">
                </WelcomeCard>
            </Pane>
            <Pane 
                display="flex"
                alignItems="center"
                paddingBottom={25}
            >                
                <WelcomeCard 
                    header="What We Do" 
                    text="Here to Serve provides assistance to families caring for a child in a life-or-death health crisis such as childhood cancer, transplants, critical conditions at birth, accidents, etc. We do this by:
                    Mobilizing people and resources to meet daily living requirements of families who do not qualify for government assistance.
                    Building online communities of support, called Care Communities, that provide a network of services and financial assistance for families with a critically-ill child.">
                </WelcomeCard>

                <WelcomeCard 
                    header="Our Inspiration" 
                    text="Here to Serve is dedicated to Silvio Quintas, Bryan Quintas, Phil Carlson and Paul Alindog who exhibited unimaginable courage, faith and dignity in their battles with cancer and are the inspiration for starting Here to Serve. Bryan Quintas won his battle with cancer. Silvio, Phil and Paul are home with the Lord. Because of these valiant warriors, Here to Serve strives to make a difference in the lives of individuals, families and their caregivers in medical crises.
                    ">
                </WelcomeCard>

                {/* <div>
                    <h3>About the Platform</h3>
                    <p>This platform is used for creating care communities and starting volunteering opportunities. It allows you to:
                    - Create care communities
                    - Manage communities
                    - Invite others to join your community
                    - Create events and volunteer groups
                    - Join communities
                    - And many more</p>
                </div> */}
            </Pane>
        </Pane>
    );
}

export default WelcomeText