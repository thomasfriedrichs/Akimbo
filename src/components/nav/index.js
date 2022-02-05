import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CoinSearch from "./../coinSearch";
import MarketOverview from "./../marketOverview";

const Tab = createMaterialTopTabNavigator();

const Nav = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name='Home'
        component={CoinSearch}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name='Coin Search'
        component={CoinSearch}
        options={{title: 'Search'}}
      />
    </Tab.Navigator>
  )
};

export default Nav;