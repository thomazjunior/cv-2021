import React from 'react';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from '../app1/src/stacks/MainStack'
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
