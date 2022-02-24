import React, {
  useState, 
  useEffect
} from 'react';
import { 
  View, 
  ActivityIndicator
} from 'react-native';
import { 
  getHeaders, 
  url 
} from '../../api/index';
import { 
  styles, 
  P, 
  H1 
} from './overviewStyles';

const MarketOverview = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //fetch data
  useEffect(() => {
    fetch(url.global, getHeaders)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(err => console.error(err))
    .finally(setLoading(false));
  });

  return (
    <View style={styles.container}> 
      <H1>Market Overview</H1>
      {isLoading ? (
      <ActivityIndicator/>
      ) : (
        <>
          <P>Market Cap: $ {data.market_cap_usd}</P>
          <P>24h Trading Volume: $ {data.volume_24h_usd}</P>
          <P>Bitcoin Dominance: {data.bitcoin_dominance_percentage}%</P>
          <P>Currencies on Market: {data.cryptocurrencies_number}</P>
          <P>Market Cap ATH: $ {data.market_cap_ath_value}</P>
        </>
      )}
    </View>
  );
};

export default MarketOverview;