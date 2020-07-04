import React from 'react'

import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';

export default function AppFooter() {
    return(
        <Footer>
            <Container>
                <Content style={{ textAlign: 'center' }} className='has-text-grey-darker'>
                    <p>
                        © 2020 Made by <a href='https://hack4impact.org/'>Hack4Impact</a>
                    </p>
                </Content>
            </Container>
        </Footer>
    )
}