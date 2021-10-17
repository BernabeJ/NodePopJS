

export function anuncioView(anuncio) {
       
         return`<a href ="/detail.html?id=${anuncio.id}">
        <div class="anuncio">
        <img class ="foto" src=${anuncio.foto}>
        <strong class = "message">${anuncio.message}</strong>
        <p class = "tags"> Tags: ${anuncio.tag}</p>
        <p class = "precio"> Precio: ${anuncio.precio} €</p>
        <p class = "compra_venta"> ${anuncio.compra_venta}</p>
        <p class = "user" >Autor: ${anuncio.author}</p>
        <p class = "date">Fecha: ${anuncio.date}</p>
        </div>
        </a>`
}

export function errorView(message){
        return `<div class="error">
        ${message}
        <button class="button_error">X</button>
        </div>`
}

export function successView(message){
        return `<div class="success">
        ${message}
        <button>Cerrar</button>
        </div>`
}

export function loaderView() {
    return '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'
    
}

export function anuncioDetailView(anuncio) {
        if (anuncio === null) {
                return '<h1>:( No existe ese Anuncio'
        }
        let button = ''
        if (anuncio.canBeDeleted) {
                button = '<button class="deleted">Borrar</button>'
        }
        return `
        <p style="font-size:2em" class="message">${anuncio.message}</p>
        <img class="foto" src=${anuncio.foto}>
        <p class="precio">Precio: ${anuncio.precio}€</p>
        <p class="tags">Tags: ${anuncio.tag}</p>
        <p class="compra-venta">Estado: ${anuncio.compra_venta}</p>
        <strong class="author">${anuncio.author}</strong> -
        <time datetime class= "time""${anuncio.date}">Fecha: ${anuncio.date}</time></br>
        ${button}
        `
}