# Primer server con http module de nodejs
### Objetivos 
​
1. Crear el primer servidor con nodejs que atienda solicitudes y devuelva respuestas
2.  Repasar etiquetas html y css
​
Crea un servidor preparado para escuchar en un puerto solicitudes y servir un site que cumpla con lo siguiente:
​
- Crea rutas básicas para servir una página web clásica (Home| ¿Quiénes somos? | ¿Dónde Estamos? | ¿Qué hacemos? | Contacto... etc...)
- ¿Llegaste aquí? Ahora sirve en respuesta a la petición de cada ruta (endpoint) los ficheros HTML correspondientes: home.html, contact.html, about.html...
 - Construye un area de navegación (Hipervinculos) en las secciones para navegar por el site
- El código fuente del site debe estar en archivos .html y .css que deben ser leidos con nodejs desde el file system para enviar su contenido con el cuerpo de las respuestas HTTP.
- La app se debe iniciar con el comando `npm start` (investiga como)
- Crea una página 404.html para los request a otros recursos del servidor no contemplados.
​
Endpoints de ejemplo:
​
```js
GET http://localhost:3000/
GET http://localhost:3000/about
GET http://localhost:3000/location
GET http://localhost:3000/mission
GET http://localhost:3000/contact
```
​
​
## Resources
​
[HTTP mimetypes](https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
[HTTP statusCode](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
[nodejs http.createServer()](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener)
[nodejs request](https://nodejs.org/api/http.html#class-httpclientrequest)
[nodejs response](https://nodejs.org/api/http.html#class-httpclientrresponse)