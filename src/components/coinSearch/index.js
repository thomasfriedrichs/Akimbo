import React, { useState } from 'react';
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

const CoinSearch = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const Fetch = text => {
    fetch(`${url.search}${text}`)
    .then(response => response.json())
    .then(json => setData(json))
    .catch(err => console.error(err))
    .finally(setTimeout(() => {setLoading(false)}, 1000))
  }

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
                    onClick={() => navigation.navigate('Details', id)} 
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