import React from 'react';
import {Image} from 'react-native';

const ArrowUp = () => {
  return (
    // for dropdown arrow up icon
    <Image
      style={{height: 24, width: 24}}
      source={require('../assets/icons/arrow_up_blue.png')}
    />
  );
};

export default ArrowUp;
