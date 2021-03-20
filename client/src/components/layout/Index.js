import React from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search';

const HomePage = () => (
  <React.Fragment>
    <Search />
    <Tracks />
  </React.Fragment>
);

export default HomePage;
