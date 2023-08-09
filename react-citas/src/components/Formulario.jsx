import { useState } from 'react';

const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    //Validamos los campos del formulario
    if([nombreMascota, nombrePropietario, email, fechaAlta, sintomas].includes('')) {
      setError(true);
      console.error('No puede haber ningún campo de formulario vacío')
    }
    else{

      // Restablecemos el state de error en caso de que todo esté ok
      setError(false);
    }
  }

  return (
    <div className="sm:w-full md:w-1/2 lg:w-2/5 sm:mb-10">
      <h2 className="font-bold text-center text-3xl">Seguimiento de pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añadir y administrar pacientes.
      </p>
      <form className="bg-white shadow-md p-5 rounded-md" onSubmit={ handleSubmitForm }>
        { error && 
          <div className="bg-red-300 text-center p-2 mb-5 text-red-950 rounded-md">
            Todos los campos son obligatorios
          </div>
        }
        <div className="mb-5">
          <label htmlFor="input-nombre-mascota" className="block">Nombre mascota</label>
          <input id="input-nombre-mascota" className="w-full border-2 p-2 mt-2 rounded-md" 
          type="text" placeholder="Nombre de la mascota" 
          value={nombreMascota}
          onChange={ (e) => setNombreMascota(e.target.value) } 
          />
        </div>
        <div className="mb-5">
          <label htmlFor="input-nombre-propietario" className="block">Nombre propietario</label>
          <input id="input-nombre-propietario" className="w-full border-2 p-2 mt-2 rounded-md" 
          type="text" placeholder="Nombre del propietario"
          value={nombrePropietario}
          onChange={ (e) => setNombrePropietario(e.target.value) } 
          />
        </div>
        <div className="mb-5">
          <label htmlFor="input-email" className="block">Email</label>
          <input id="input-email" className="w-full border-2 p-2 mt-2 rounded-md" 
          type="email" placeholder="Email"
          value={email}
          onChange={ (e) => setEmail(e.target.value) } 
          />
        </div>
        <div className="mb-5">
          <label htmlFor="input-fecha-alta" className="block">Fecha de alta</label>
          <input id="input-fecha-alta" className="w-full border-2 p-2 mt-2 rounded-md" 
          type="date" value={fechaAlta}
          onChange={ (e) => setFechaAlta(e.target.value) } 
          />
        </div>
        <div className="mb-5">
          <label htmlFor="textarea-sintomas" className="block">Síntomas</label>
          <textarea id="textarea-sintomas" className="w-full border-2 p-2 mt-2 rounded-md" 
          placeholder="Describe los síntomas" 
          value={sintomas}
          onChange={ (e) => setSintomas(e.target.value) } />
        </div>
        <div className="mb-5">
          <input type="submit" className="bg-indigo-600 w-full p-2 uppercase text-white font-bold cursor-pointer
           hover:bg-indigo-500 rounded-md transition-all" value="Agregar paciente" />
        </div>
      </form>
    </div>
  );
}

export default Formulario;

