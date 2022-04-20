import React, {
  useState, 
  useEffect,
  useContext
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
  Img
} from './twitterStyles';
import { IdContext } from '../nav';

const Twitter = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id, setId } = useContext(IdContext);


  useEffect(() => {
    fetch(`${url.twitter}${id}/twitter`)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(err => console.error(err))
    .finally(setTimeout(() => {setLoading(false)}, 500));
  });
  
  const dataReversed = data.reverse();

  return (
    <View
      style={styles.container}
    >
      <h2>Twitter</h2>
      {isLoading ? <></> :
        <FlatList 
          style={styles.list}
          data={dataReversed}
          renderItem={({ item }) => {
            return(
              <Div>
                <A href={item.status_link} target="_blank">
                  <P>{item.user_name}</P>
                  <P>{item.status}</P>
                </A>
              </Div>
            )
          }}
          keyExtractor={
            (item, index) => item.status_id+index
          }
        />
      }
    </View>
  )
}

export default Twitter;