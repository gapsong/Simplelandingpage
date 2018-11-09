import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import {connect} from 'react-redux'

import Layout from './Layout';
import Features from './Features';
import Profile from './Profile';
import View from './View';

const Home = () => {
  return (
    <Layout>
      <View title="Our goals" content="Come together and create cool things"/>
      <View title="What do we do" content="Nerds coming together and create cool things. Everyone is 
      welcome. You don't need the programming knowledge yet."/>
      <View title="Location" content="Motius"/>
      <View title="Sponsors" content="Motius and inovex"/>
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Features />
            <a href="https://www.meetup.com/CodeAndChillClub/">Navigate to Meetup Page</a>
            <br/>
            <a href="https://github.com/CodeAndChillClub">Navigate to Github Page</a>
          </Grid.Column>
          <Grid.Column>
            {/* <Profile /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {homeAttribute: 0};
};

export default connect(mapStateToProps)(Home);
