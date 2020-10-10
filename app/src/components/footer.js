import React from 'react'

import Footer from 'react-bulma-components/lib/components/footer'
import Container from 'react-bulma-components/lib/components/container'
import Content from 'react-bulma-components/lib/components/content'
import Hero from 'react-bulma-components/lib/components/hero'

export default function AppFooter() {
  return (
    <Hero size='medium'>
      <Hero.Head renderAs='header' />
      <Hero.Footer>
        <Footer>
          <Container>
            <Content
              style={{ textAlign: 'center' }}
              className='has-text-grey-darker'
            >
              <p>
                © 2020 Made by{' '}
                <a href='https://hack4impact.org/'>Hack4Impact</a>
              </p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </Hero>
  )
}
