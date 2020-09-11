import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

// test("renders the contact form", () => {
//   const container = render(<ContactForm />)
//   const firstNameField = container.getByLabelText(/first name/i)

//   expect(firstNameField).toBeInTheDocument();
//   console.log(container)
// })