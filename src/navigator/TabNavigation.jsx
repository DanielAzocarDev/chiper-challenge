import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NewScreen } from '../screens/NewScreen/NewScreen';
import { TopScreen } from '../screens/TopScreen.jsx/TopScreen';
import { PopularScreen } from '../screens/Popular/PopularScreen';
import { HotScreen } from '../screens/HotScreen/HotScreen';

const Tab = createMaterialTopTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='New' component={NewScreen} />
      <Tab.Screen name='Top' component={TopScreen} />
      <Tab.Screen name='Popular' component={PopularScreen} />
      <Tab.Screen name='Hot' component={HotScreen} />
    </Tab.Navigator>
  )
}
