/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'skyblue' }}>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>my first plugin development</p>
      <button color='primary'>
        strapi button 
      </button>
    </div>
    
  );
};

export default HomePage;
