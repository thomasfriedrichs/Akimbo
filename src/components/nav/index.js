import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarketOverview from "./../marketOverview";
import SearchsStackScreen from './searchStackNav'

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
        component={SearchsStackScreen}
        options={{
          title: 'Search'
        }}
      />
    </Tab.Navigator>
  )
};

export default Nav;