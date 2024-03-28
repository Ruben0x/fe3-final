import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { useDentistStates } from '../Context/DentistContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const { state } = useDentistStates();

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.dentistList.map((dentist) => {
          return (
            <Card
              key={dentist.id}
              item={dentist}
              // name={dentist.name}
              // username={dentist.username}
              // id={dentist.id}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Home;
