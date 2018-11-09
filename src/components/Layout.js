import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon , Image} from 'semantic-ui-react';

import { pullRight, h1, box } from './layout.css';

const Layout = ({ children }) => {
  return (
    <Container className = {box}>
      <Link to="/">
        <Image
          size="middle"
          floated="left"
          shape="circular"
          bordered
          src="../../public/cc_icon.png"
        />
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Made with <Icon name="heart" color="red" />
      </p>
    </Container>
  );
};

export default Layout;
