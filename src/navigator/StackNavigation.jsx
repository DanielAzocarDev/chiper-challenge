import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigation } from './TabNavigation';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Home"
        options={{
          title: 'Home',
        }}
        component={TabNavigation}
      />

    </Stack.Navigator>
  )
}
