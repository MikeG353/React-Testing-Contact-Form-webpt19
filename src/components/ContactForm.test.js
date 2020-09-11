import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders the contact form", () => {
    const container = render(<ContactForm />)
    const firstNameField = container.getByLabelText(/first name*/i)
    const lastNameField = container.getByLabelText(/last name*/i)
    const emailField = container.getByLabelText(/email*/i)
    const messageField = container.getByLabelText(/message/i)
    const submitButton = container.getByTestId(/submitbutton/i)
  
    expect(firstNameField).toBeInTheDocument();
    expect(lastNameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(messageField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  })

test("first name handles text input", () => {
    const container = render(<ContactForm />)
    const firstNameField = container.getByLabelText(/first name*/i)
    let name = "Bob"

    fireEvent.change(firstNameField, { target: {value: 'Bob'}})
    expect(firstNameField.value).toBe(name)

    name = "Mike"
    fireEvent.change(firstNameField, { target: {value: 'Mike'}})
    expect(firstNameField.value).toBe(name)
    
})
