import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import waveShapeSvg from '../assets/waveShape.svg';
import WaterGauge from '../components/WaterGauge';

const HomeScreen = () => {
  // const [height, setHeight] = useState(20);
  // const tkRef = useRef(null);

  // useEffect(() => {
  //   if (tkRef.current) {
  //     const amount = parseFloat(tkRef.current.getAttribute('data-amount'));
  //     const newHeight = amount * 0.8 + 20;
  //     setHeight(newHeight);
  //   }
  // }, []);

  return <WaterGauge amount={50} />;
};

export default HomeScreen;

// const styles = StyleSheet.create({
//   tk: {
//     position: 'relative',
//     width: '40%',
//     height: 130,
//     paddingTop: 50,
//     margin: 'auto',
//     backgroundColor: 'rgba(56, 56, 56, 0.8)',
//     borderRadius: 40,
//     borderBottomWidth: 3,
//     borderBottomColor: '#000',
//     textAlign: 'center',
//     zIndex: 1,
//     overflow: 'hidden',
//   },
//   lq: {
//     backgroundColor: 'rgba(128, 128, 128, 0.99)',
//     height: '80%',
//     top: -2,
//     borderRadius: 40,
//     borderBottomWidth: 3,
//     borderBottomColor: '#000',
//     position: 'absolute',
//     left: 0,
//     right: 0,
//   },
//   tkAfter: {
//     content: '',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     height: '20%',
//     borderWidth: 1,
//     borderColor: '#000',
//     borderRadius: 100,
//   },
// });
