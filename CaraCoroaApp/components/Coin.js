import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function CoinImage({ side }) {
  const imageSource = side === 'cara'
    ? require('../assets/Cara.jpeg')
    : require('../assets/Coroa.jpeg');

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
});