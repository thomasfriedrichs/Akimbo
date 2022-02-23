import React from 'react';
import { 
  createNativeStackNavigator 
} from '@react-navigation/native-stack';
import CoinSearch from '../coinSearch/index';
import DetailsStackScreen from './detailsStackNav';

const SearchsStack = createNativeStackNavigator();

const SearchsStackScreen = () => {
  return (
    <SearchsStack.Navigator 
      screenOptions={{
        headerTitle: '',
      }}
    >
      <SearchsStack.Screen 
        name="Search" 
        component={CoinSearch}
        options={{
          headerShown: false,
        }}
      />
      <SearchsStack.Screen 
        name="DetailsStackScreen" 
        component={DetailsStackScreen}
      />
    </SearchsStack.Navigator>
  );
}

export default SearchsStackScreen;
