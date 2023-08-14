import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]); // State para guardar pacientes
  const [paciente, setPaciente] = useState({}); // State para modificar pacientes
  const [reRendered, setReRendered] = useState(false); // State para controlar re-render de strictmode React18
  
  // UseEffect para ejecutar cuando el component esté listo.
  useEffect(() => {

    // Cargamos en el State pacientes lo que tenga el localStorage pacientes, cuando el component esté listo
    const cargarLocalStorage = () => {
      const pacientesStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesStorage);
      setReRendered(true);
    }

     cargarLocalStorage();
    
  }, []);

  // Almacenamos en localStorage los cambios en el State pacientes
  useEffect(() => {
    // Si tenemos el valor true de reRendered, sabemos que ya contamos con el State definitivo tras rerender
    if(reRendered) {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
    }
  }, [pacientes, reRendered]);

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
