import {generateHomepage, bodyDiv} from './homepage.js';
import { addMenuItem } from './menu.js';
import { addContact } from './contact.js';
import './style.css';
import veggies from './Veggies.jpg';
import wholePizza from './WholePizza.jpg';

export const headerDiv = document.createElement('div');
headerDiv.id = 'header';
export const home = document.createElement('div');
export const menu = document.createElement('div');
export const contact = document.createElement('div');

generateHomepage();

home.addEventListener('click',()=>{
    bodyDiv.innerHTML = '';
    bodyDiv.classList.remove('menu-items-container');
    bodyDiv.classList.remove('flex-container');
    menu.style.backgroundColor = 'transparent';
    contact.style.backgroundColor = 'transparent';
    generateHomepage();
});

menu.addEventListener('click',()=>{
    bodyDiv.innerHTML = '';
    bodyDiv.classList.remove('flex-container');
    home.style.backgroundColor = 'transparent';
    contact.style.backgroundColor = 'transparent';
    addMenuItem('Veggies','vegetables mid-sized pizza', '100EGP', veggies);
    addMenuItem('whole thing','vegetables pizza', '200EGP', wholePizza);
})

contact.addEventListener('click', ()=>{
    bodyDiv.innerHTML = '';
    bodyDiv.classList.remove('menu-items-container');
    home.style.backgroundColor = 'transparent';
    menu.style.backgroundColor = 'transparent';
    addContact('Zombie Pizza','+11 58976','Zombie@Pizza.com');
})