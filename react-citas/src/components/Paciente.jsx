import PropTypes from 'prop-types';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const {nombreMascota, nombrePropietario, fechaAlta, email, sintomas, id } = paciente;

  const handleEliminar = () => {
    const confirmacion = confirm(`¿Seguro que quieres eliminar al paciente ${nombreMascota}?`);
    if(confirmacion) {
      eliminarPaciente(id);
    }
  }

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
        <div className='flex justify-between mt-10'>
          <button className="bg-indigo-600 w-1/3 p-2 uppercase text-white font-bold cursor-pointer
           hover:bg-indigo-500 rounded-md transition-all"
           onClick={ () => setPaciente(paciente) }
           >Editar</button>
           <button className="bg-red-500 w-1/3 p-2 uppercase text-white font-bold cursor-pointer
           hover:bg-red-400 rounded-md transition-all" onClick={ handleEliminar }>Eliminar</button>
        </div>
      </div>
  );
}

Paciente.propTypes = {
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func,
  eliminarPaciente: PropTypes.func
}

export default Paciente;
