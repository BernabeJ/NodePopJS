
export default {

    parseAnuncio: function (anuncio) {
          anuncio.date = anuncio.date || anuncio.updatedAt
                //nos aseguramos que no puedan introducir codigo malicioso
                anuncio.message = anuncio.message.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                anuncio.author = anuncio.user.username
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
            throw new Error('Error al cargar el anuncio')
        }
    },

    post: async function (url, body) {
      const requestConfig = {
            method: 'POST',
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

    createAnuncio: async function (text) {
        const url = 'http://localhost:8000/api/anuncios'
        return this.post(url, {message:text})
    },

    isAuthenticed: function () {
        return localStorage.getItem('AUTH_TOKEN') !== null
    }



}