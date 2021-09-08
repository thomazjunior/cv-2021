import React from 'react';

import UserContextProvider from './src/context/UserContext';
import MainStack from './src/MainStack';
import { NavigationContainer } from '@react-navigation/native';

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
      <MainStack />
      </NavigationContainer>
    </UserContextProvider>
   
  );
}
