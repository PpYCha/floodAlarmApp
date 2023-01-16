import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './src/navigation/Routes';
import LoginScreen from './src/screens/LoginScreen';
import ContextProvider from './src/context/ContextProvider';

const App = () => {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
