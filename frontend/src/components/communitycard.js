import React from 'react'
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Heading from 'react-bulma-components/lib/components/heading';

const CommunityCard = ({ title, img }) => (
  <Card>
    <Card.Image size="4by3" src={img} />
    <Card.Content>
      <Media>
        <Media.Item>
          <Heading size={4}>{title}</Heading>
        </Media.Item>
      </Media>
    </Card.Content>
  </Card>
)

export default CommunityCard
