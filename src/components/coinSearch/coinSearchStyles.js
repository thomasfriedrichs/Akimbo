import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: '#18191A',
    alignItems: 'center',
    color: 'white',
    height: '100vh',
  },
  input: {
    color: 'white',
    border: 'solid',
    borderRadius: '5px',
  }
});

export const FormWrap = styled.div` 
  display: flex;
  margin: 5vh;
  gap: 3vw;
`

export const CoinWrap = styled.div` 
  width: 80vw;
  height: 5vh;
  border-bottom: solid;
  margin: 3vh;
  padding: 1vh;
  display: flex;
  justify-content: space-around;
`

export const P = styled.p` 
  margin: 0;
  padding: 2px;
`
