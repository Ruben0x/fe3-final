import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDentistStates } from '../Context/DentistContext';

const Detail = () => {
  const { state } = useDentistStates();
  const params = useParams();
  const [dentist, setDentist] = useState([]);

  const urlApi = 'https://jsonplaceholder.typicode.com/users/' + params.id;
  const getDetails = (url) => {
    axios(url).then((res) => setDentist(res.data));
  };

  useEffect(() => {
    getDetails(urlApi);
  }, []);

  return (
    <>
      <div className={state.theme}>
        <h1>Detail Dentist id </h1>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <table>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>{dentist.name}</th>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Detail;
