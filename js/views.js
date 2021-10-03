

export function anuncioView(anuncio) {
   return `<div class="anuncio">
        <strong class = "nombre">${anuncio.nombre}</strong>
        <p class = "precio" >${anuncio.precio}</p>
        <p class = "tags"> ${anuncio.tags}</p>
        </div>`
}