import PropTypes from 'prop-types';
import Paciente from './Paciente';
const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="sm:w-full md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="font-bold text-center text-3xl">Listado Pacientes</h2>

      {pacientes && pacientes.length ? 
        (
          <>
            <p className="text-lg mt-5 text-center mb-10">Administra tus pacientes.</p>
            {pacientes.map(paciente => (
              <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </>
        ) : 
        (
          <p className="text-lg mt-5 text-center mb-10">
            No hay pacientes registrados. <br />
            Empieza <span className="text-indigo-600">agregando pacientes</span> desde el formulario.
          </p>
        ) 
      }
    </div>
  );
}

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array,
  setPaciente: PropTypes.func,
  eliminarPaciente: PropTypes.func
}

export default ListadoPacientes;
