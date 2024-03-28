import { Link } from 'react-router-dom';
import { useDentistStates } from '../Context/DentistContext';
import DH from '../img/DH.ico';

const Navbar = () => {
  const { state, dispatch } = useDentistStates();
  const toggleTheme = () => {
    const theme = state.theme === 'dark' ? '' : 'dark';
    dispatch({ type: 'TOGGLE_THEME', payload: theme });
  };

  return (
    <nav className={state.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <img src={DH} alt='LogoDH' />
      <Link to={'/'}>Home</Link>
      <Link to={'/contacto'}>Contacto</Link>
      <Link to={'/favs'}>Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
