import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainStack from './src/MainStack';
import { NavigationContainer } from '@react-navigation/native';

export default () => {
  return (
    <NavigationContainer>
      <MainStack />
      <StatusBar style="auto"/>
    </NavigationContainer>
  
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

