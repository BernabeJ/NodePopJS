import AnuncioListController from './controllers/AnuncioListController.js '
import ErrorMessageController from './controllers/ErrorMessageController.js';

window.addEventListener('DOMContentLoaded', function () {
    //controlador de mensajes de error
    const errorDiv = document.querySelector('.error-message');
    const errorMessageController = new ErrorMessageController(errorDiv)


     //coger el elemento del DOM (HTML), donde quiero cargar los anuncios
    const anuncioListDiv = document.querySelector('.anuncio-list');

    
    //crear un controlador pasándole el elemento del DOM donde cargar los anuncios
    const anuncioListController = new AnuncioListController(anuncioListDiv, errorMessageController)

    //decir al controlador que pinte los anuncios
    anuncioListController.renderAnuncios()

    

 });
