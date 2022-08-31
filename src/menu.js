import {bodyDiv} from './homepage';
import {menu} from './index';

export function addMenuItem(name, description, price, imageURL){
    bodyDiv.classList.add('menu-items-container');
    menu.style.backgroundColor = '#fee2e2';
    const itemCardDiv = document.createElement('div');
    itemCardDiv.classList.add('item-card')
    const itemDetailsDiv = document.createElement('div');
    itemCardDiv.appendChild(itemDetailsDiv);
    const imageDiv = document.createElement('div');
    itemCardDiv.appendChild(imageDiv);
    const itemName = document.createElement('h2');
    itemDetailsDiv.appendChild(itemName);
    const itemDescription = document.createElement('p');
    itemDetailsDiv.appendChild(itemDescription);
    const itemPrice = document.createElement('p');
    itemDetailsDiv.appendChild(itemPrice);
    const itemImage = new Image();
    itemImage.src = imageURL;
    imageDiv.appendChild(itemImage);
    itemName.textContent = name;
    itemDescription.textContent = description;
    itemPrice.textContent = price;
    bodyDiv.appendChild(itemCardDiv);
}