import SignupController from "./controllers/SignupController.js";
import MessageController from "./controllers/MessageController.js"

window.addEventListener('DOMContentLoaded', function () {
    //Seleccionamos el nodo de formulario
    const form = document.querySelector('form');

    //Crear una instacia del controlador del formulario
    const controller = new SignupController(form)

    //Seleccionamos el nodo para mostrar mensajes de error
    const messages = document.querySelector('.error-message')

    //Crear una instacia de ErrorMessageController
    const messageCtrl = new MessageController(messages)
})