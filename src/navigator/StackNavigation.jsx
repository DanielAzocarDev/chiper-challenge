import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigation } from './TabNavigation';
import { DetailsScreen } from '../screens/Details/DetailsScreen';

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
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
      />

    </Stack.Navigator>
  )
}
