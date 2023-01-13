import React, {useState} from 'react';
import {View, Text} from 'react-native';

function WaterGauge({amount}) {
  const gaugeHeight = amount * 0.8 + 20;
  const containerStyles = {
    position: 'relative',
    width: '40%',
    height: 130,
    paddingTop: 50,
    margin: 'auto',
    backgroundColor: 'rgba(56, 56, 56, 0.8)',
    borderRadius: 40,
    borderBottomWidth: 3,
    borderBottomColor: '#000',
    textAlign: 'center',
    overflow: 'hidden',
  };
  const gaugeStyles = {
    backgroundColor: 'rgba(128, 128, 128, 0.99)',
    height: gaugeHeight,
    borderRadius: 40,
    borderBottomWidth: 3,
    borderBottomColor: '#000',
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
      <View style={gaugeStyles} />
    </View>
  );
}

export default WaterGauge;
