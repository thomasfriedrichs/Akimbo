import React, {
  useState
} from "react";
import { 
  createMaterialTopTabNavigator 
} from '@react-navigation/material-top-tabs';
import MarketOverview from "./../marketOverview";
import SearchStackScreen from './searchStackNav';

const Tab = createMaterialTopTabNavigator();

export const IdContext = React.createContext({
  id: '',
  setId: () => {}
});

const Nav = () => {
  const [ id, setId ] = useState('');
  const value = { id, setId};

  return(
    <IdContext.Provider value={value}>
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
    </IdContext.Provider>
  )
};

export default Nav;