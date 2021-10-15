import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"

export default class AnuncioFormController {
    constructor(element) {
        this.element = element
        this.attachEventListeners()
    }
    attachEventListeners() {
        this.element.addEventListener('submit', async event => {
            event.preventDefault()

            if (this.element.checkValidity()) {
                const data = new FormData(this.element)
                const message = data.get('message')
                try {
                    const result = await DataService.createAnuncio(message)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Anuncio Creado')
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }
        })
    }
}