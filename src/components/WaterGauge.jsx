import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

function WaterGauge({amount}) {
  const gaugeHeight = amount * 0.8 + 20;
  const containerStyles = {
    position: 'relative',
    width: '40%',
    height: 130,
    paddingTop: 50,
    margin: 'auto',
    backgroundColor: 'rgb(76, 158, 214)',
    borderRadius: 40,
    borderBottomWidth: 3,
    borderBottomColor: '#000',
    textAlign: 'center',
    overflow: 'hidden',
  };
  const gaugeStyles = {
    backgroundColor: 'rgb(176, 224, 233)',
    height: gaugeHeight,
    borderRadius: 40,
    borderBottomWidth: 3,
    borderBottomColor: 'rgb(186, 206, 237)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  };

  return (
    <View style={containerStyles}>
      <Text style={{textAlign: 'center', paddingTop: '40%', color: 'white'}}>
        {amount}%
      </Text>
      <View style={gaugeStyles}></View>
    </View>
  );
}

export default WaterGauge;
