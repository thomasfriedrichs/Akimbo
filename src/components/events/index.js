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
} from './eventsStyles';
import { IdContext } from '../nav';

const Events = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id, setId } = useContext(IdContext);


  useEffect(() => {
    fetch(`${url.events}${id}/events`)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(err => console.error(err))
    .finally(setTimeout(() => {setLoading(false)}, 500));
  });
  
  const dataReversed = data.reverse()

  return (
    <View
      style={styles.container}
    >
      <h2>Events</h2>
      {isLoading ? <></> :
        <FlatList 
          style={styles.list}
          data={dataReversed}
          renderItem={({ item }) => {
            return(
              <Div>
                <A href={item.link} target="_blank">
                  <P>{item.name}</P>
                  <P>{item.description}</P>
                </A>
              </Div>
            )
          }}
          keyExtractor={
            (item, index) => item.id+index
          }
        />
      }
    </View>
  )
}

export default Events;
