import {anuncioView} from './views.js'


window.addEventListener('DOMContentLoaded', function () {
    const anuncios = [
        {
            "nombre": "Bicicleta",
            "venta": true,
            "precio": 230,
            "foto": "./images/Bicicleta.jpg",
            "tags": ["lifestyle", "motor"]
        },
        {
            "nombre": "iPhone 3GS",
            "venta": false,
            "precio": 50.00,
            "foto": "./images/Iphone3GS.jpg",
            "tags": ["lifestyle", "mobile"]
        },
        {
            "nombre": "MackBook Pro",
            "venta": true,
            "precio": 1800.00,
            "foto": "./images/MackBook.jpg",
            "tags": ["work"]
        },
        {
            "nombre": "Toyota Corolla",
            "venta": true,
            "precio": 25000.00,
            "foto": "./images/Toyota.jpg",
            "tags": ["lifestyle", "motor"]
        },
        {
            "nombre": "iPhone 13",
            "venta": false,
            "precio": 1000.00,
            "foto": "./images/Iphone13.jpg",
            "tags": ["lifestyle", "mobile"]
        },
        {
            "nombre": "Televisor LG 65",
            "venta": true,
            "precio": 1000.00,
            "foto": "./images/televisor.jpg",
            "tags": ["lifestyle"]
        },
        {
            "nombre": "Renault Megane",
            "venta": false,
            "precio": 5000.00,
            "foto": "./images/megane.jpg",
            "tags": ["lifestyle", "motor"]
        },
        {
            "nombre": "Honda CBR",
            "venta": true,
            "precio": 10000.00,
            "foto": "./images/honda.jpg",
            "tags": ["lifestyle", "motor"]
        }
    ];




    function loadAnuncios() {
    
        //Seleccionamos el contenedor donde vamos a mostrar los anuncios
        const list = document.querySelector('.anuncios');
    
        //Recorremos con un bucle los anuncios existentes
        for (const anuncio of anuncios) {
            const anuncioElement = document.createElement('article')
            const anuncionHtml = anuncioView(anuncio)
            anuncioElement.innerHTML = anuncionHtml
            list.appendChild(anuncioElement)
        }
        //Seleccionamos el nodo del loader
        const loader = document.querySelector('.lds-ring');
        loader.classList.toggle('hidden');

    }



    //Seleccionamos el boton

    const button = document.querySelector('button');
    button.addEventListener('click', loadAnuncios)

});
