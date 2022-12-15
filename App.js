import 'react-native-gesture-handler';

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/navigator/StackNavigation';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
