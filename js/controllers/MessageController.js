import PubSub from "../services/PubSub.js"
import { errorView } from "../views.js"
import { successView } from "../views.js"

export default class MessageController {
    constructor(element) {
        this.element = element
        //suscribimos el controlador a los elementos que nos interesan
        PubSub.subscribe(PubSub.events.SHOW_ERROR, (error) => { this.showError(error) })
        
        //Nos suscribimos para mostra mensajes Succes
        PubSub.subscribe(PubSub.events.SHOW_SUCCESS, message => {
            this.showSuccess(message)
        })

    }

    attachCloseMessageEventListener() {
        const button = this.element.querySelector('button')
        button.addEventListener('click',  () => {
            this.hideError()
        })
    }

     showSuccess(message) {
        this.element.innerHTML = successView(message)
        this.attachCloseMessageEventListener()

    }



     showError(message) {
        this.element.innerHTML = errorView(message)
        this.attachCloseMessageEventListener()

    }

    hideError() {
     //TODO: mejorar esto para no borrar todo el html y mejor ocultarlo
        this.element.innerHTML = ''
    }

}