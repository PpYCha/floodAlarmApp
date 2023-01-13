import {createContext, useContext, useEffect, useReducer, useRef} from 'react';
import reducer from './reducer';

const initialState = {
  currentUser: null,
  loading: false,
  alert: {open: false, severity: 'info', message: ''},
  openRelated: false,
  openResearch: false,
  openExtension: false,
  openAdministrative: false,
  openInvolvement: false,
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
