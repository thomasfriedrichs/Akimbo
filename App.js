import React, {useState, useEffect} from 'react';
import
{ 
  StyleSheet, 
  View, 
  ActivityIndicator
} from 'react-native';
import styled from 'styled-components';
import { getHeaders, url } from './api';
import Nav from './components/nav';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //fetch data
  useEffect(() => {
    fetch(url.global, getHeaders)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(err => console.error(err))
    .finally(setLoading(false));  
  })
  
  return (
    <View style={styles.container}>
      <Nav/>
      <H1>Market Overview</H1>
      {isLoading ? (
      <ActivityIndicator/>
      ) : (
        <>
          <P>Market Cap: {data.market_cap_usd}</P>
          <P>24h Trading Volume: {data.volume_24h_usd}</P>
          <P>Bitcoin Dominance: {data.bitcoin_dominance_percentage}%</P>
          <P>Currencies on Market: {data.cryptocurrencies_number}</P>
          <P>Market Cap ATH: {data.market_cap_ath_value}</P>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: '#18191A',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
});

const P = styled.p` 
  width: 80vw;
  border-bottom: solid;
  padding-bottom: 4vh;
  text-align: center;
  font-size: 1rem;
`
const H1 = styled.h1` 
  width: 80vw;
  text-align: center;
  padding-bottom: 5vh;
  font-size: 2rem;
`

export default App;