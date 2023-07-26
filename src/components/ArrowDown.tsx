import React from 'react';
import {Image} from 'react-native';

const ArrowDown = () => {
  return (
    // For dropdown arrow down icon
    <Image
      style={{height: 24, width: 24}}
      source={require('../assets/icons/arrow_down_blue.png')}
    />
  );
};

export default ArrowDown;
