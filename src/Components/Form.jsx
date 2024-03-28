import React, { useState } from 'react';

const Form = () => {
  const [info, setInfo] = useState({
    nombre: '',
    email: '',
  });

  const [mensajeExito, setMensajeExito] = useState(false);
  const [mensajeError, setMensajeError] = useState(false);

  const onChangeNombre = (e) => {
    setInfo({ ...info, nombre: e.target.value });
  };
  const onChangeEmail = (e) => {
    setInfo({ ...info, email: e.target.value });
  };

  const validateEmail = (email) => {
    let reg = /\S+@\S+\.\S+/;
    return reg.test(email);
  };
  const validateName = (nombre) => {
    let reg = /^[a-zA-Z ]{5,30}$/;
    return reg.test(nombre);
  };
  //Aqui deberan implementar el form completo con sus validaciones
  const handleSumbit = (e) => {
    e.preventDefault();
    if (validateName(info.nombre) && validateEmail(info.email)) {
      setMensajeExito(true);
      setMensajeError(false);
      console.log(info);
    } else {
      setMensajeError(true);
      setMensajeExito(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <label>Nombre Completo:</label>
        <input
          type='text'
          name='nombreCompleto'
          id=''
          onChange={onChangeNombre}
        />
        <label htmlFor=''>Email</label>
        <input type='email' name='email' id='' onChange={onChangeEmail} />
        <button>Enviar</button>
      </form>
      {mensajeExito && (
        <p>Gracias {info.nombre}, te contactaremos cuando antes via email</p>
      )}
      {mensajeError && <p>Por favor verifique su información nuevamente</p>}
    </div>
  );
};

export default Form;
