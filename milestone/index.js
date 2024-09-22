"use strict";
const button = document.querySelector('button');
const person_Info = document.querySelector('.personal-info-content');
button.addEventListener('click', () => {
    setTimeout(() => {
        person_Info.classList.toggle('show');
    }, 2000);
});
