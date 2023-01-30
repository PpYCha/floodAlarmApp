import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routes from './src/navigation/Routes';
import LoginScreen from './src/screens/LoginScreen';
import ContextProvider from './src/context/ContextProvider';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const App = () => {
  return (
    <ContextProvider>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </ContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
