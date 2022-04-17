import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarketOverview from "./../marketOverview";
import SearchStackScreen from './searchStackNav'

const Tab = createMaterialTopTabNavigator();

const Nav = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name='Home'
        component={MarketOverview}
        options={{
          title: 'Home'
        }}
      />
      <Tab.Screen
        name='Coin Search'
        component={SearchStackScreen}
        options={{
          title: 'Search'
        }}
      />
    </Tab.Navigator>
  )
};

export default Nav;