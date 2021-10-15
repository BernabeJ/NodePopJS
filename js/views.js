

export function anuncioView(anuncio) {
       
         return`<a href ="/detail.html?id=${anuncio.id}">
        <div class="anuncio">
        <strong class = "message">${anuncio.message}</strong>
        <p class = "user" >${anuncio.author}</p>
        <p class = "tags"> ${anuncio.tags}</p>
        <p class = "date"> ${anuncio.date}</p>
        </div>
        <hr>
        </a>`
}

export function errorView(message){
        return `<div class="error">
        ${message}
        <button>Cerrar</button>
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
        return `
        <p style="font-size:2em">${anuncio.message}</p>
        <strong class="author">${anuncio.author}</strong> -
        <time datetime ="${anuncio.date}">${anuncio.date}</time>
        `
}