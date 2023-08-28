import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("Renders App Component", () => {
    render(<App />);
    const headerElement = screen.getByText('Seguimiento de Pacientes', {selector: 'h1'});
    const formElement = screen.getByText('Añadir y administrar pacientes.');
    const listElement = screen.getByText('Listado Pacientes');

    expect(headerElement).toBeInTheDocument();
    expect(formElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
  });
});