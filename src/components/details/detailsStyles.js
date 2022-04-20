import styled from 'styled-components';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    backgroundColor: '#18191A',
    color: 'white'
  },
});

export const P = styled.p` 
  margin-left: 5vw;
  margin-right: 5vw;
`;

export const H2 = styled.h2` 
  margin-top: 5vh;
`;

export const Div = styled.div` 
  margin: 0.5vh;
  border-bottom: solid;
  gap: 3vw;
`;

export const LinkWrapper = styled.div` 
  display: flex;
  gap: 5vw;
`;