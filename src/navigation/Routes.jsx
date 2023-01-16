import React from 'react';
import {useValue} from '../context/ContextProvider';

import Navigation from './Navigation';
import AuthNavigation from './AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';

const Routes = () => {
  const {
    state: {currentUser, loading},
    dispatch,
  } = useValue();

  return (
    <NavigationContainer>
      {currentUser ? <Navigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Routes;
