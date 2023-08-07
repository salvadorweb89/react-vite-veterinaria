const Paciente = () => {
  return (
    <div className="bg-white shadow-md p-5 rounded-md ml-3 mb-3">
        <p className="font-bold mb-3 uppercase">
          Nombre: {''}
          <span className="font-normal normal-case">Firulais</span>
        </p>
        <p className="font-bold mb-3 uppercase">
          Nombre del propietario: {''}
          <span className="font-normal normal-case">Pepe</span>
        </p>
        <p className="font-bold mb-3 uppercase">
          Email: {''}
          <span className="font-normal normal-case">pepe@pepe.com</span>
        </p>
        <p className="font-bold mb-3 uppercase">
          F. Alta: {''}
          <span className="font-normal normal-case">22/10/2022</span>
        </p>
        <p className="font-bold mb-3 uppercase">
          Síntomas: {''}
          <span className="font-normal normal-case">fiebre</span>
        </p>
      </div>
  );
}

export default Paciente;
