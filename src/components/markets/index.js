import React, {
  useState, 
  useEffect
} from 'react';
import {
  View,
  FlatList 
} from 'react-native';
import { url } from '../../api/index';
import { 
  styles, 
  P,
  Div,
  A,
  Exchange
} from './marketsStyles';

const Markets = ({ id }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url.markets}${id}/markets`)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(err => console.error(err))
    .finally(setTimeout(() => {setLoading(false)}, 500))
  });
  
  return (
    <View
      style={styles.container}
    >
      <h2>Markets</h2>
      {isLoading ? <></> :
        <FlatList 
          style={styles.list}
          data={data}
          renderItem={({ item }) => {
            return(
              <Div>
                <A href={item.market_url} target="_blank">
                  <Exchange>{item.exchange_name}</Exchange>
                  <P>Pair: {item.pair}</P>
                </A>
              </Div>
            )
          }}
          keyExtractor={
            (item, index) => item.exchange_id+index
          }
        />
      }
    </View>
  )
}

export default Markets;
