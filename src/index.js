import {addProductInfo, contentDiv,generateHomepage} from './homepage.js';
import './style.css';

const headerDiv = document.createElement('div');
headerDiv.id = 'header';
const home = document.createElement('div');
const menu = document.createElement('div');
const contact = document.createElement('div');

generateHomepage();

home.addEventListener('click',()=>{
    document.querySelector('content-body').innerHTML = '';
    generateHomepage();
});