import React from 'react';

const IdContext = React.createContext({
  id: '',
  setId: () => {}
});

export const IdContextProvider = IdContext.Provider;

const useIdContext = ({children}) => {
  
  return (
    <IdContext>
      {children}
    </IdContext>
  );
};

export default useIdContext;
