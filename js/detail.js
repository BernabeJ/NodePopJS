import LoaderController from "./controllers/LoaderController.js"
import AnuncioDetailController from "./controllers/AnuncioDetailController.js"
import MessageController from "./controllers/MessageController.js"


window.addEventListener('DOMContentLoaded', function () {

    const messagesDiv = document.querySelector('.messages')
    new MessageController(messagesDiv)

    const loaderDiv = document.querySelector('.loader')
    new LoaderController(loaderDiv)
    
    //obtengo el id del anuncio a cargar de la url
    const id = new URLSearchParams(window.location.search).get('id')
    //instanciamos el controlador del detalle del anuncio

    const anuncioDiv = document.querySelector('.anuncio')
    new AnuncioDetailController(anuncioDiv, id)



})

