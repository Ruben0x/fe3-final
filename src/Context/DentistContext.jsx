import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { dentistReducer } from '../Components/Reducers/dentistReducer';
import axios from 'axios';

const DentistStates = createContext();

const initialState = {
  theme: 'dark',
  data: {
    dentistList: [],
    dentistSelected: {},
    dentistFavs: JSON.parse(localStorage.getItem('dentistFavs')) || [],
  },
};
const DentistContext = ({ children }) => {
  const [state, dispatch] = useReducer(dentistReducer, initialState);
  const urlAPi = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(urlAPi).then((res) =>
      dispatch({ type: 'GET_LIST', payload: res.data })
    );
  }, []);
  useEffect(() => {
    localStorage.setItem('dentistFavs', JSON.stringify(state.data.dentistFavs));
  }, [state.data.dentistFavs]);

  return (
    <DentistStates.Provider value={{ state, dispatch }}>
      {children}
    </DentistStates.Provider>
  );
};

export default DentistContext;

export const useDentistStates = () => useContext(DentistStates);
