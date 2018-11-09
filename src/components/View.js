import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const View = (props) => {

  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>
          {props.content}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default View;
