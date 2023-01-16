import {createContext, useContext, useEffect, useReducer, useRef} from 'react';
import reducer from './reducer';

const initialState = {
  currentUser: null,
  loading: false,
  user: {
    firstName: '',
    middleName: '',
    lastName: '',
    address: '',
    username: '',
    password: '',
  },
};

const Context = createContext(initialState);

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};

export default ContextProvider;
