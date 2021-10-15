
import MessageController from "./controllers/MessageController.js"
import AnuncioFormController from "./controllers/AnuncioFormController.js"
import DataService from "./services/DataService.js"

window.addEventListener('DOMContentLoaded', function () {

    //si el usuario no esta autenticado lo redireccionamos a la pagina de login
    if (DataService.isAuthenticed() === false) {
        window.location.href = '/login.html?next=/new.html'
    }
    //Seleccionamos el nodo de formulario
    const form = document.querySelector('form');

    //Crear una instacia del controlador del formulario
     new AnuncioFormController(form)

    //Seleccionamos el nodo para mostrar mensajes de error o éxito
    const messages = document.querySelector('.messages')

    //Crear una instacia de ErrorMessageController
     new MessageController(messages)
})