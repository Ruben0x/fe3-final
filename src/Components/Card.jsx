import React from 'react';
import doctor from '../img/doctor.jpg';
import { Link, useLocation } from 'react-router-dom';
import { useDentistStates } from '../Context/DentistContext';

const Card = ({ item }) => {
  const { state, dispatch } = useDentistStates();

  const location = useLocation();

  const dentistFavs = state.data.dentistFavs;

  const addFav = () => {
    dentistFavs.some((e) => e.id === item.id)
      ? alert('Este dentista ya está en tus favoritos')
      : (dispatch({ type: 'ADD_FAV', payload: item }),
        alert('Agregado a favoritos con éxito'));

    // console.log(item);
  };
  const deleteFav = () => {
    dispatch({ type: 'DELETE_FAV', payload: item.id });
    // console.log(item);
  };

  return (
    <div className='card'>
      <Link to={'/dentist/' + item.id}>
        <h3>{item.name}</h3>
        <p>{item.username}</p>
      </Link>
      <img src={doctor} alt='' />
      {location.pathname == '/' ? (
        <button onClick={addFav} className='favButton'>
          💖 Add fav
        </button>
      ) : (
        <button onClick={deleteFav} className='favButton'>
          ❌ Delete Fav
        </button>
      )}
    </div>
  );
};

export default Card;
