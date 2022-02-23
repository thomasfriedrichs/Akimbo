import React from 'react';
import { 
  createNativeStackNavigator 
} from '@react-navigation/native-stack';
import Details from '../details/index';
import Events from './../events/index';
import Markets from './../markets/index';
import Twitter from './../twitter/index';

const DetailsStack = createNativeStackNavigator();

const DetailsStackScreen = props => {

  const id = props.route.params;

  return (
    <DetailsStack.Navigator  
      screenOptions={{
        headerTitle: ''
      }}
    >
      <DetailsStack.Screen
        name="Details" 
      >
        {props => <Details {...props}  id={id}/>}
      </DetailsStack.Screen>
      <DetailsStack.Screen 
        name="Markets" 
      >
        {props => <Markets {...props} id={id}/>}
      </DetailsStack.Screen>
      <DetailsStack.Screen 
        name="Events" 
      >
        {props => <Events {...props} id={id}/>}
      </DetailsStack.Screen>
      <DetailsStack.Screen 
        name="Twitter" 
      >
        {props => <Twitter {...props} id={id}/>}
      </DetailsStack.Screen>
    </DetailsStack.Navigator>
  );
};

export default DetailsStackScreen;