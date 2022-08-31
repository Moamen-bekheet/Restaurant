import { bodyDiv } from "./homepage";
import { contact } from "./index";
export function addContact(name, phone, email){
    bodyDiv.classList.add('flex-container');
    contact.style.backgroundColor = "#fee2e2";
    const contactCard = document.createElement('div');
    const nameField = document.createElement('h2');
    nameField.textContent = name;
    contactCard.appendChild(nameField)
    const phoneField = document.createElement('p');
    phoneField.textContent = phone;
    contactCard.appendChild(phoneField)
    const emailField = document.createElement('p');
    emailField.textContent = email;
    contactCard.appendChild(emailField);
    bodyDiv.appendChild(contactCard);
}