import React, {
  useContext
} from 'react';
import { 
  createNativeStackNavigator 
} from '@react-navigation/native-stack';
import CoinSearch from '../coinSearch/index';
import Details from '../details/index';
import Events from './../events/index';
import Markets from './../markets/index';
import Twitter from './../twitter/index';
import { IdContext } from '.';

const SearchStack = createNativeStackNavigator();

const SearchsStackScreen = () => {
  const { id, setId } = useContext(IdContext);

  return (
    <IdContext.Consumer value={id}>
      {id => (
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
            component={Details}
          />
          <SearchStack.Screen 
            name="Markets" 
            component={Markets}
          />
          <SearchStack.Screen 
            name="Events"
            component={Events} 
          />
          <SearchStack.Screen 
            name="Twitter" 
            component={Twitter}
          />
        </SearchStack.Navigator>
      )}
    </IdContext.Consumer>
  );
};

export default SearchsStackScreen;
