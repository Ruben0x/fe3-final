import React from 'react';
import Card from '../Components/Card';
import { useDentistStates } from '../Context/DentistContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useDentistStates();
  const dentistFavs = state.data.dentistFavs;
  return (
    <main className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className='card-grid'>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {dentistFavs.map((favs) => (
          <Card key={favs.id} item={favs} />
        ))}
      </div>
    </main>
  );
};

export default Favs;
