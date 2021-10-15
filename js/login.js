
import MessageController from "./controllers/MessageController.js"
import LoginController from "./controllers/LoginController.js"

window.addEventListener('DOMContentLoaded', function () {
    //Seleccionamos el nodo de formulario
    const form = document.querySelector('form');

    //Crear una instacia del controlador del formulario
     new LoginController(form)

    //Seleccionamos el nodo para mostrar mensajes de error
    const messages = document.querySelector('.error-message')

    //Crear una instacia de ErrorMessageController
     new MessageController(messages)
})