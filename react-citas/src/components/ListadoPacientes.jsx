import PropTypes from 'prop-types';
import Paciente from './Paciente';
const ListadoPacientes = ({pacientes}) => {
  return (
    <div className="sm:w-full md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="font-bold text-center text-3xl">Listado Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Administra tus pacientes.</p>
      
      {pacientes.map(paciente => (
        <Paciente 
          key={paciente.id}
          paciente={paciente}
        />
      ))}
    </div>
  );
}

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array
}

export default ListadoPacientes;
