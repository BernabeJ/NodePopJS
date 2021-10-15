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
        } catch (error) {
            PubSub.publish(PubSub.events.SHOW_ERROR, error)
        } finally {
            PubSub.publish(PubSub.events.HIDE_LOADING)
        }
    }
}