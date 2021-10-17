# NodePopJS

### Tu web de compra y venta

Site diseñado para simular un portal de compra y venta empleando tecnologia HTML CSS y JAVASCRIPT, se han hecho uso de recursos como PubSub (Publish Subscribe pattern) y se ha seguido el modelo de MVC (módelo, vista, controlador), tambien nos hemos apoyado en un servidor backend llamado Sparrest, creado por **Alberto Casero**.

A continuacion se detalla como descargar y usar Sparrest.
Tambien se añade a modo ejemplo un archivo db.json, para poder probar el maquetado de la página.

- Para hacerlo funcionar, únicamente hay que descargarse el código desde (https://github.com/kasappeal/sparrest.js) y, dentro de la carpeta donde se aloja el código, instalar las dependencias ejecutando:

```
npm i
```

- Y para arrancar el servidor ejecutar:

```
npm start
```

- Por defecto, arrancará el servidor en el puerto 8000, por lo que se podrá acceder a él a través de
  (http://127.0.0.1:8000/)
- Este backend expone los siguientes endpoints:
  POST/auth/register:permiteregistrarunusuario.Recibecomoparámetrosusernamey password y devuelve si se ha podido o no registrar al usuario (no permite usuarios con el mismo username en el sistema).
- POST/auth/login:endpointdeautenticación.Recibecomoparámetrosusernamey password y devuelve un token JWT de autenticación.
- POST/upload:quepermitelasubidadearchivosatravésdeunatributofile. Sólo se pueden subir archivos usando el formato multipart/form-data.
- En /api/:
  Se encuentran los endpoints ofrecidos por json-server, por lo que se aconseja la lectura de su documentación.
- Para usar los métodos POST, PUT o DELETE en cualquier subruta de /api/, será necesaria la autenticación usando token JWT.
- Esta autenticación se realiza añadiendo a las peticiones HTTP una cabecera
  Authorization: Bearer <token>, donde <token> es el valor del token obtenido en el endpoint de login.
