import styled from 'styled-components';
import { StyleSheet } from 'react-native-web';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: '#18191A',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
});

export const P = styled.p` 
  width: 80vw;
  border-bottom: solid;
  padding-bottom: 4vh;
  text-align: center;
  font-size: 1rem;
`
export const H1 = styled.h1` 
  width: 80vw;
  text-align: center;
  padding-bottom: 5vh;
  font-size: 2rem;
`