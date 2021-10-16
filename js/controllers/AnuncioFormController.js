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
                const tag = data.get(['tag'])
                const precio = data.get('precio')
                const compra_venta = data.get('compra_venta')
                const foto = data.get('foto')
                try {
                    const result = await DataService.createAnuncio(message,tag,precio,compra_venta,foto)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Anuncio Creado')
                } catch (error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR, error)
                }
            }
        })
    }
}