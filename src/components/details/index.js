import React, {
  useState, 
  useEffect,
  useContext
} from 'react';
import {
  View, 
} from 'react-native';
import { url } from '../../api/index';
import { 
  styles, 
  P,
  H2,
  Div,
  LinkWrapper
} from './detailsStyles';
import { IdContext } from '../nav';

const Details = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useContext(IdContext); 

  //fetch data
  useEffect(() => {
    fetch(`${url.details}${id}`)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(err => console.error(err))
    .finally(setLoading(false));
  },[]);

  return(
    <View style={styles.container}>
      {isLoading ? (
        <></>
      ) : (
        <>
          <h1>{data.name} / {data.symbol}</h1>
          <br/>
          <P>{data.description}</P>
          <P>Consensus: {data.proof_type} / {data.hash_algorithm}</P>
          <LinkWrapper>
            <Div
              onClick={() => navigation.navigate('Markets')}
            >
              <H2>Markets </H2>
            </Div>
            <Div
              onClick={() => navigation.navigate('Events')}
            >
              <H2>Events </H2>
            </Div>
            <Div
              onClick={() => navigation.navigate('Twitter')}
            >
              <H2>Twitter </H2>
            </Div>
          </LinkWrapper>
        </>
      )}
    </View>
  );
};

export default Details;