import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"
import { anuncioDetailView } from "../views.js"


export default class AnuncioDetailController{

    constructor(element, anuncioId) {
        this.element = element
        this.loadAnuncio(anuncioId)

    }
    async loadAnuncio(anuncioId) {
        PubSub.publish(PubSub.events.SHOW_LOADING)
        try {
            const anuncio = await DataService.getAnuncioDetail(anuncioId)
            this.element.innerHTML = anuncioDetailView(anuncio)
            this.addDeleteButtonEventListener(anuncio)
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }
     addDeleteButtonEventListener(anuncio) {
         const button = this.element.querySelector('button')
         if (button) {
             button.addEventListener('click', async () => {
                 const answer = confirm('¿Seguro que quieres borrar el anuncio?')
                 if (answer === true) {
                     PubSub.publish(PubSub.events.SHOW_LOADING)
                     button.setAttribute('disabled', 'disabled')
                     try {
                         await DataService.deleteAnuncio(anuncio.id)
                         window.location.href = '/?message=anuncio-deleted'
                        } catch (error) {
                            PubSub.publish(PubSub.events.SHOW_ERROR, error)
                            button.removeAttribute('disabled')
                        } finally {
                        PubSub.publish(PubSub.events.HIDE_LOADING)
                    }

                    }
                })
        }
    }
}