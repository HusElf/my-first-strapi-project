import React, { useState } from 'react';
import pluginId from '../../pluginId';
import { Button } from '@strapi/design-system';

const HomePage = () => {
  const [count, setCount] = useState(0);

  const Click = () => {
    setCount(count + 1);
  };

  const RefreshClick = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 style={{background: 'aqua', display: 'inline', marginLeft: '50%'}}>
        {pluginId}'s HomePage
      </h1>
      <p style={{color: 'blue', fontSize: '18px', marginBottom: '20px', marginTop: '40px'}}>
        my first plugin development
      </p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={Click}>submit</Button>
      </div>
      <p style={{fontSize: '16px', marginTop: '10px',marginBottom: '10px', color: 'aliceblue',display: 'flex', justifyContent: 'center'}}>
        Button clicked {count} times!
      </p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={RefreshClick} style={{display: 'flex', justifyContent: 'center' }}>
          Refresh Count</Button>
      </div>
    </div>
  );
};

export default HomePage;
