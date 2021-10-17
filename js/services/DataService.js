
export default {

    parseAnuncio: function (anuncio) {
        anuncio.date = anuncio.date || anuncio.updatedAt
        //nos aseguramos que no puedan introducir codigo malicioso
        anuncio.message = anuncio.message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        anuncio.author = anuncio.user.username.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        anuncio.foto = anuncio.foto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        anuncio.precio = anuncio.precio.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        anuncio.compra_venta = anuncio.compra_venta.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        anuncio.tag = anuncio.tag.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        anuncio.canBeDeleted = anuncio.userId === this.getAuthUserId()
        return anuncio
    },
    
    getAnuncios: async function () {
        const url = 'http://localhost:8000/api/anuncios?_expand=user'
        const response = await fetch(url)
        if (response.ok) {
            const anuncios = await response.json();
            return anuncios.map(anuncio =>this.parseAnuncio(anuncio))
        } else {
            throw new Error('Error al recuperar los Anuncios')
        }
    },

    getAnuncioDetail: async function (anuncioId)  {
        const url = `http://localhost:8000/api/anuncios/${anuncioId}?_expand=user`
        const response = await fetch(url)
        if (response.ok) {
            const anuncio = await response.json()
            return this.parseAnuncio(anuncio)
        } else {
            if (response.status === 404) {
                return null
            }
            throw new Error('Error al cargar el anuncio')
        }
    },

     delete: async function(url, body={}) {
        return await this.request('DELETE', url, body)
    },


    post: async function (url, body) {
        return await this.request('POST', url, body)
    },

     put: async function (url, body) {
        return await this.request('PUT', url, body)
    },


   request: async function (method, url, body) {
      const requestConfig = {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
          body: JSON.stringify(body)
      }
        if (this.isAuthenticed()) {
            const token = localStorage.getItem('AUTH_TOKEN')
            requestConfig.headers.Authorization = `Bearer ${token}`
        }
        const response = await fetch(url, requestConfig)
        try {
            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                throw new Error(data.message)
            }
        } catch (error) {
            throw error
        }
      
    },

   registerUser: async function(username, password) {
       const url = 'http://localhost:8000/auth/register'
       return await this.post(url, {username,password})
       
    },
    
    login: async function (username, password) {
       const url = 'http://localhost:8000/auth/login'
        const data = await this.post(url, { username, password })
        const token = data.accessToken
        localStorage.setItem('AUTH_TOKEN', token)
       
    },

    createAnuncio: async function (text, tag, precio, compra_venta, foto) {
        const url = 'http://localhost:8000/api/anuncios'
        return await this.post(url, { message: text, tag:tag, precio:precio, compra_venta:compra_venta, foto })
    },

    isAuthenticed: function () {
        return localStorage.getItem('AUTH_TOKEN') !== null
    },

    
    
    deleteAnuncio: async function (anuncioId) {
        const url = `http://localhost:8000/api/anuncios/${anuncioId}`
        return await this.delete(url)
    },
    
    
    getAuthUserId: function () {
        const token = localStorage.getItem('AUTH_TOKEN')
        if (token === null) {
            return null
        }
        const b64Parts = token.split('.')
        if (b64Parts.length !== 3) {
            return null
        }
        const b64Data = b64Parts[1]
        try {
            const userJSON = atob(b64Data)
            const user = JSON.parse(userJSON)
            return user.userId
            
        } catch {
            console.error('Error while decoding JWT token', error)
            return null
        }
    }
    

}