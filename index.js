/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';
function getDogImage(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=> response.json())
    .then(Json=> display(Json))
    .catch(e => console.log(e.message));
}

function display(Json){
    console.log(Json);
    $('.js-dog-img').replaceWith(
        `<img src="${Json.message}" class="js-dog-img">`
    )
    $('.result').removeClass('hidden');
}

function watchForm(){
    $('form').on('submit', event=>{
        event.preventDefault();
        getDogImage();
    });
}

$(function(){
    console.log('loadded');
    watchForm();
})