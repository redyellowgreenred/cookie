import React from 'react';
import { Image, StyleSheet } from 'react-native';
const ImageComponent = ({ style }) => (
  <Image
    source={require('./image/red.jpg')} // 替换为有效的图片链接
    resizeMode="stretch"
    style={style}
  />
);

export default ImageComponent;