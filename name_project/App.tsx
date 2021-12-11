/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Filter from './src/screens/Filter/index';
import MainTab from './src/nav/MainTab';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Filter"
          component={Filter}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <Onboarding2 />
  );
};

export default App;
