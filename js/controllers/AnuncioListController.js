import { anuncioView } from "../views.js";
import DataService from "../services/DataService.js";



export default class AnuncioListController{

    constructor(element, errorMessageController) {
        this.element = element
        this.errorMessageController = errorMessageController
    }

    async renderAnuncios() {
        try {
            const anuncios = await DataService.getAnuncios();
            for (const anuncio of anuncios) {
                const anuncioElement = document.createElement('article');
                anuncioElement.innerHTML = anuncioView(anuncio);
                this.element.appendChild(anuncioElement);
            }
        } catch (error) {
            this.errorMessageController.showError(error)
        }
    }
}