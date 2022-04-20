import React, { 
  useState,
  useContext 
} from 'react';
import { 
  View, 
  TextInput,
  Button,
} from 'react-native';
import { Formik } from 'formik';
import { url } from '../../api/index';
import { 
  styles,
  CoinWrap, 
  P,
  FormWrap
} from './coinSearchStyles'; 
import { IdContext } from '../nav';

const CoinSearch = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id, setId } = useContext(IdContext);

  //API query
  const Fetch = text => {
    fetch(`${url.search}${text}`)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(err => console.error(err))
    .finally(setTimeout(() => {setLoading(false)}, 1000));
  };

  //Updates context state then navigates to details
  const NavIdUpdate = (id) => {
    setId(id);
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{text:''}}
        onSubmit={values => Fetch(values.text)}
      >
        {({ handleChange, handleSubmit }) => ( 
          <FormWrap>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('text')}
            />
            <Button onPress={handleSubmit} title='Submit'/>
          </FormWrap>
        )}
      </Formik>
        { isLoading ? (
          <></>
        ) : (
          <>
            {data.currencies.map((coin, index) => {
              const id = coin.id
              return (
                <CoinWrap 
                  onClick={() => NavIdUpdate(id)} 
                  key={index}
                >
                  <P>{coin.name}</P>
                  <P>{coin.symbol}</P>
                  <P>{coin.type}</P>
                </CoinWrap>
              )
            })}
          </>
        )}
    </View>
  );
};

export default CoinSearch;