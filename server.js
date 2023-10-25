const http = require('http')
const fs = require('fs')
const index = fs



const server = http.createServer((request, response) => {
	const path = request.url

	console.log(path)

	if (path === '/') {
		response.statusCode = 200 // Establece el status code de respuesta
		response.setHeader('content-type', 'text/html') // Establece cabeceras http de respuesta

		// Prepara el body
        response.write(index.readFileSync('./html/index.html', 'utf8', (err, data) => {
            if(err) {
                console.log(err);
            } 
                console.log(data);
        }))


        
	
		// Finaliza la respuesta
		response.end()
	} else if (path === '/styles/global.css') {
		response.statusCode = 200 // Establece el status code de respuesta
		response.setHeader('content-type', 'text/css') // Establece cabeceras http de respuesta

		// Prepara el body
	

		response.end()
	} else {
		response.statusCode = 404 // Establece el status code de respuesta
		response.setHeader('content-type', 'text/plain') // Establece cabeceras http de respuesta

		// Envia respuesta y Finaliza
		response.end('ERROR 404: NOT FOUND')
	}
})

server.listen(4001, () => console.log('Server on...'))