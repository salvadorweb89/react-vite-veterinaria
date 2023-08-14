import { useState } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]); // State para guardar pacientes
  const [paciente, setPaciente] = useState({}); // State para modificar pacientes

  const eliminarPaciente = id => {
    const pacientesUpdated = pacientes.filter(paciente => paciente.id != id);
    setPacientes(pacientesUpdated);
  }
  
  return (
    <div className="container mx-auto mt-4">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div> 
    </div>
  )
}

export default App
