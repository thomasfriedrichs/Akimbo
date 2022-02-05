import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Nav from './src/components/nav';


const App = () => {
  return (
    <NavigationContainer>
      <Nav/>
    </NavigationContainer>
  );
}

export default App;