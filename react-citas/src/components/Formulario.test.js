import { render, screen, fireEvent } from "@testing-library/react";
import Formulario from "./Formulario";

const getFormFields = () => {
  const inputNombre = screen.getByPlaceholderText('Nombre de la mascota');
  const inputNombrePropietario = screen.getByPlaceholderText('Nombre del propietario');
  const inputEmail = screen.getByPlaceholderText('Email');
  const inputFechaAlta = screen.getByLabelText('Fecha de alta');
  const textareaSintomas = screen.getByPlaceholderText('Describe los síntomas');

  return { inputNombre, inputNombrePropietario, inputEmail, inputFechaAlta, textareaSintomas };
}

const setupEmptyForm = () => {
  render(<Formulario 
    pacientes={[]} setPacientes={()=>{}} paciente={{}} setPaciente={()=>{}}
  />)

  return getFormFields();
}


const setupEditForm = () => {
  render(<Formulario 
    pacientes={[]} 
    setPacientes={()=>{}} 
    paciente={{
      id: '1234',
      nombreMascota: 'Firulais',
      nombrePropietario: 'Pepe',
      email: 'pepe@pepe.com',
      fechaAlta: '2023-08-28',
      sintomas: 'Síntoma test'
    }} 
    setPaciente={()=>{}}
  />)

  return getFormFields();
}

describe("<Formulario />", () => {

  beforeEach(() => {
    
    // Ignoramos mensajes de error en consola.
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});

  });

  test("Render Formulario component", () => {
    render(<Formulario 
      pacientes={[]} setPacientes={()=>{}} paciente={{}} setPaciente={()=>{}}
    />);

    const formSubmitElement = screen.getByText('Agregar paciente', {exact: false});

    expect(formSubmitElement).toBeInTheDocument();
  });

  test("Envío formulario nuevo registro OK", () => {
    const { inputNombre, 
      inputNombrePropietario, 
      inputEmail, 
      inputFechaAlta, 
      textareaSintomas
    } = setupEmptyForm();

    const submitButton = screen.getByDisplayValue('Agregar paciente'); 

    fireEvent.change(inputNombre, {target: {value: 'Firulais'}});
    expect(inputNombre.value).toBe('Firulais');

    fireEvent.change(inputNombrePropietario, {target: {value: 'Pepe'}});
    expect(inputNombrePropietario.value).toBe('Pepe');

    fireEvent.change(inputEmail, {target: {value: 'pepe@pepe.com'}});
    expect(inputEmail.value).toBe('pepe@pepe.com');

    fireEvent.change(inputFechaAlta, {target: {value: '2023-08-28'}});
    expect(inputFechaAlta.value).toBe('2023-08-28');

    fireEvent.change(textareaSintomas, {target: {value: 'Síntoma test'}});
    expect(textareaSintomas.value).toBe('Síntoma test');

    fireEvent.click(submitButton);

    // Si el envío del form es correcto, los campos se vacían
    expect(inputNombre.value).toBe('');

  });


  test("Envío formulario nuevo registro KO", () => {

    setupEmptyForm();

    const submitButton = screen.getByDisplayValue('Agregar paciente'); 

    fireEvent.click(submitButton);

    const msgError = screen.getByText('Todos los campos son obligatorios');

    // Si algún campo está vacío, debe aparecer el mensaje de error
    expect(msgError).toBeInTheDocument();

  });


  test("Envío formulario editar registro OK", () => {
    const { 
      inputNombre, 
      inputNombrePropietario, 
      inputEmail, 
      inputFechaAlta, 
      textareaSintomas 
    } = setupEditForm();

    // al existir un id, el texto del btn cambia
    const submitButton = screen.getByDisplayValue('Editar paciente'); 

    // El formulario debe tener estos valores precargados
    expect(inputNombre.value).toBe('Firulais');
    expect(inputNombrePropietario.value).toBe('Pepe');
    expect(inputEmail.value).toBe('pepe@pepe.com');
    expect(inputFechaAlta.value).toBe('2023-08-28');
    expect(textareaSintomas.value).toBe('Síntoma test');

    fireEvent.change(inputNombre, {target: {value: 'Firulais2'}});
    expect(inputNombre.value).toBe('Firulais2');

    fireEvent.click(submitButton);

    // Si el envío del form es correcto, los campos se vacían
    expect(inputNombre.value).toBe('');

  });
});