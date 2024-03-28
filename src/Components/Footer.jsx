import React from 'react';
import DH from '../img/DH.png';
import { useDentistStates } from '../Context/DentistContext';

const Footer = () => {
  const { state } = useDentistStates();
  return (
    <footer className={state.theme}>
      <p>Powered by</p>
      <img src={DH} alt='DH-logo' />
    </footer>
  );
};

export default Footer;
