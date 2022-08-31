import photo from './pizza.jpg';
import {home, contact, menu,headerDiv} from './index';
export const contentDiv = document.getElementById('content');
export const bodyDiv = document.createElement('div');
bodyDiv.classList.add('content-body')
function addPhoto(){
    const photoDiv = document.createElement('div');
    photoDiv.id = 'photo-container';
    bodyDiv.appendChild(photoDiv);
    const pizza = new Image();
    pizza.src = photo;
    photoDiv.appendChild(pizza);
}

export function addProductInfo(){
    const header = document.createElement('h1');
    header.textContent = "Zombie Pizza";
    bodyDiv.appendChild(header);
    addPhoto();
    const description = document.createElement('p');
    description.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsum quos deserunt quod laborum quasi debitis laudantium accusamus deleniti neque amet quia, perferendis doloremque totam facilis eius consequuntur, quo error.';
    bodyDiv.appendChild(description);
    contentDiv.appendChild(bodyDiv)
}

export function generateHomepage(){
    home.style.backgroundColor = "#fee2e2";
    home.classList.add('home-nav');
    home.textContent = 'Home';

    menu.classList.add('menu-nav');
    menu.textContent = 'Menu';

    contact.classList.add('contact-nav');
    contact.textContent = 'Contact';

    headerDiv.appendChild(home);
    headerDiv.appendChild(menu);
    headerDiv.appendChild(contact);
    contentDiv.appendChild(headerDiv)
    addProductInfo();
}