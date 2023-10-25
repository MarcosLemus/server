const http = require('http')

const server = http.createServer((request, response) => {
	const path = request.url

	console.log(path)

	if (path === '/') {
		response.statusCode = 200 // Establece el status code de respuesta
		response.setHeader('content-type', 'text/html') // Establece cabeceras http de respuesta

		// Prepara el body
		response.write(
			'<html><head><link rel="stylesheet" type="text/css" href="/styles/global.css"></head>'
		)
		response.write('<body><h1>Welcome to the club!</h1>')
        response.write('<ul><li><a #home>Home</a></li>')
		response.write('<marquee>Bienvenido al home</marquee></body></html>')

		// Finaliza la respuesta
		response.end()
	} else if (path === '/styles/global.css') {
		response.statusCode = 200 // Establece el status code de respuesta
		response.setHeader('content-type', 'text/css') // Establece cabeceras http de respuesta

		// Prepara el body
		response.write('body { background-color: red; }')

		response.end()
	} else {
		response.statusCode = 404 // Establece el status code de respuesta
		response.setHeader('content-type', 'text/plain') // Establece cabeceras http de respuesta

		// Envia respuesta y Finaliza
		response.end('ERROR 404: NOT FOUND')
	}
})

server.listen(4001, () => console.log('Server on...'))