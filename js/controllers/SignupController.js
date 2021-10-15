import DataService from "../services/DataService.js"
import PubSub from "../services/PubSub.js"


export default class SignupController{

    constructor(element) {
        this.element = element // < - Esto será un <form> de HTML
        this.attachEventListeners()
      
    }
    //creamos método para comparar passwords introducidas
    checkIfAllPasswordsAreEqual() {
        const inputsPassword = this.element.querySelectorAll('input[type="password"')
        //guardo las contraseñas que hay en los inputs
        let passwords = []
        for (const input of inputsPassword) {
            if (passwords.includes(input.value) === false) {
                passwords.push(input.value)
            }
        }

        if (passwords.length === 1) {
            for (const input of inputsPassword) {
                input.setCustomValidity('')
            }
        } else {
            for (const input of inputsPassword) {
                input.setCustomValidity('Las passwords no coinciden')
            }
        }
       
    }
    
    //establecer la validación general del formulario
    attachEventListeners() {
        this.element.addEventListener('submit', async (event) =>{
            //evitamos que el formulario se envie
            event.preventDefault()


            //comprobar si el formulario valido
            if (this.element.checkValidity()) {
                //registrar usuario
                try {
                    const data = new FormData(this.element)
                    const username = data.get('username')
                    const password = data.get('password')
                    const result = await DataService.registerUser(username, password)
                    PubSub.publish(PubSub.events.SHOW_SUCCESS, 'Registrado correctamente')
                    
                } catch(error) {
                    PubSub.publish(PubSub.events.SHOW_ERROR,error)
                }
            } else {
                let errorMessage = ''
                for (const element of this.elements) {
                    if (element.validity.valid === false) {
                        errorMessage += `Error en el  campo ${element.name}: ${element.validationMessage}. `
                    }
                }
                PubSub.publish(PubSub.events.SHOW_ERROR,errorMessage)
            }
            //si no valida mostrar un mensaje de error

    
        })

        //establecer la validación personalizada de los input de tipo password
        this.element.querySelectorAll('input[type="password"]').forEach(input => {
            input.addEventListener('input',  () => {
                this.checkIfAllPasswordsAreEqual()
            })
        })

        //controlamos cambios en cada uno de los imputs y  validamos el formulario para activar o desactivar el botón
        this.element.querySelectorAll('input').forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                if (this.element.checkValidity()) {
                //si el formulario esta ok, habilitamos boton
                this.element.querySelector('button').removeAttribute('disabled')
            } else {
                //si no, deshabilitmaos boton
                this.element.querySelector('button').setAttribute('disabled', '')
            }
           })
        })
    }

}