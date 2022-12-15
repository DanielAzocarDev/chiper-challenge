import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabLayout } from '../screens/TabLayout/TabLayout';

const Tab = createMaterialTopTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='New'>
        {(props) => <TabLayout {...props} categorie='new' />}
      </Tab.Screen>
      <Tab.Screen name='Top'>
        {(props) => <TabLayout {...props} categorie='top' />}
      </Tab.Screen>
      <Tab.Screen name='Popular'>
        {(props) => <TabLayout {...props} categorie='controversial' />}
      </Tab.Screen>
      <Tab.Screen name='hot'>
        {(props) => <TabLayout {...props} categorie='hot' />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}
