import React from 'react';
import { 
  createNativeStackNavigator 
} from '@react-navigation/native-stack';
import CoinSearch from '../coinSearch/index';
import Details from '../details/index';
import Events from './../events/index';
import Markets from './../markets/index';
import Twitter from './../twitter/index';

const SearchStack = createNativeStackNavigator();

const SearchsStackScreen = props => {

  const id = props.route.params;

  return (
    <SearchStack.Navigator 
      screenOptions={{
        headerTitle: '',
      }}
    >
      <SearchStack.Screen 
        name="Search" 
        component={CoinSearch}
        options={{
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name="Details" 
      >
        {props => <Details {...props}  id={id}/>}
      </SearchStack.Screen>
      <SearchStack.Screen 
        name="Markets" 
      >
        {props => <Markets {...props} id={id}/>}
      </SearchStack.Screen>
      <SearchStack.Screen 
        name="Events" 
      >
        {props => <Events {...props} id={id}/>}
      </SearchStack.Screen>
      <SearchStack.Screen 
        name="Twitter" 
      >
        {props => <Twitter {...props} id={id}/>}
      </SearchStack.Screen>
    </SearchStack.Navigator>
  );
}

export default SearchsStackScreen;
