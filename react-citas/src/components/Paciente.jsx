import PropTypes from 'prop-types';

const Paciente = ({ paciente }) => {

  const {nombreMascota, nombrePropietario, fechaAlta, email, sintomas } = paciente;

  return (
    <div className="bg-white shadow-md p-5 rounded-md md:ml-3 mb-3">
        <p className="font-bold mb-3 uppercase">
          Nombre: {''}
          <span className="font-normal normal-case">{nombreMascota}</span>
        </p>
        <p className="font-bold mb-3 uppercase">
          Nombre del propietario: {''}
          <span className="font-normal normal-case">{nombrePropietario}</span>
        </p>
        <p className="font-bold mb-3 uppercase">
          Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 uppercase">
          F. Alta: {''}
          <span className="font-normal normal-case">{fechaAlta}</span>
        </p>
        <p className="font-bold mb-3 uppercase">
          Síntomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
      </div>
  );
}

Paciente.propTypes = {
  paciente: PropTypes.object.isRequired
}

export default Paciente;
