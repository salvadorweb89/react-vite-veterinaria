import React from 'react';

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-bold text-center text-3xl">Seguimiento de pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añadir y administrar pacientes.
      </p>
      <form className="bg-white shadow-md p-5 rounded-md">
        <div className="mb-5">
          <label htmlFor="input-nombre-mascota" className="block">Nombre mascota</label>
          <input id="input-nombre-mascota" className="w-full border-2 p-2 mt-2 rounded-md" type="text" placeholder="Nombre de la mascota"/>
        </div>
        <div className="mb-5">
          <label htmlFor="input-nombre-propietario" className="block">Nombre propietario</label>
          <input id="input-nombre-propietario" className="w-full border-2 p-2 mt-2 rounded-md" type="text" placeholder="Nombre del propietario"/>
        </div>
        <div className="mb-5">
          <label htmlFor="input-email" className="block">Email</label>
          <input id="input-email" className="w-full border-2 p-2 mt-2 rounded-md" type="email" placeholder="Email"/>
        </div>
        <div className="mb-5">
          <label htmlFor="input-fecha-alta" className="block">Fecha de alta</label>
          <input id="input-fecha-alta" className="w-full border-2 p-2 mt-2 rounded-md" type="date" placeholder="Email"/>
        </div>
        <div className="mb-5">
          <label htmlFor="textarea-sintomas" className="block">Síntomas</label>
          <textarea id="textarea-sintomas" className="w-full border-2 p-2 mt-2 rounded-md" placeholder="Describe los síntomas" />
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

