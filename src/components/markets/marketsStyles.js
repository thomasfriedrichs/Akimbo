import styled from 'styled-components';
import  { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    backgroundColor: '#18191A',
    color: 'white'
  },
  list: {
    textAlign: 'center',
    flexDirection: 'column',
    flex:1,
  }
})

export const Div = styled.div` 
  margin: 1.5vh 10vw;
  border-style: solid;
  border-width: 0.1vh;
  border-radius: 10px;
  width: 80vw;
`

export const A = styled.a` 
  display: inline-flex;
  justify-content: space-around;
  gap: 2vh;
  text-decoration: none;
  color: white !important;
`

export const Exchange = styled.p` 
  margin: 1vh 0;
  font-weight: bold;
`

export const P = styled.p` 
  align-items: center;
  margin: 1vh 0;
`


