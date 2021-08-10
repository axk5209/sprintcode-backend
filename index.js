const express = require('express')
const cors = require('cors')
const axios = require("axios");

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

const requestLogger = (request, response, next) => {
	console.log('Method:', request.method)
	console.log('Path:  ', request.path)
	console.log('Body:  ', request.body)
	console.log('---')
	next()
}
const languages = {
	"java": 62, // (Node.js 12.14.0)
	"c++": 54, //(GCC 9.2.0)
	"javascript": 63, //(Node.js 12.14.0)
	"python": 71, // (Python 3.8.1)
	"c": 50//C (GCC 9.2.0)
}
const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}

app.use(requestLogger)


app.post('/api/compile', async (request, response) => {
	const body = request.body
	const check = {
		"language_id": languages[body.language],
		"source_code": body.source_code,
		"stdin": body.stdin
	}
	const postResponse = await axios({
		"method": "POST",
		"url": "https://judge0-ce.p.rapidapi.com/submissions",
		"headers": {
			"content-type": "application/json",
			"x-rapidapi-host": "judge0-ce.p.rapidapi.com",
			"x-rapidapi-key": "b3f157d6cdmsh8510bfb6b4f15e8p1f0521jsnf2227fcc230a",
			"accept": "application/json",
			"useQueryString": true
		}, "data": check
	})

	const token = postResponse.data.token
	response.json(token)
})

app.get('/api/:token', async (request, response) => {
	const token = request.params.token
	async function getTokenResponse(token)
	{
		let getResponse = await axios({
				"method": "GET",
				"url": `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
				"headers": {
					"content-type": "application/octet-stream",
					"x-rapidapi-host": "judge0-ce.p.rapidapi.com",
					"x-rapidapi-key": "b3f157d6cdmsh8510bfb6b4f15e8p1f0521jsnf2227fcc230a",
					"useQueryString": true
				}
			})
		return getResponse
	}

	async function responseLoop(token)
	{
		let tokenResponse = await getTokenResponse(token)
		if (tokenResponse.data.status.description === 'In Queue' || tokenResponse.data.status.description === 'Processing')
		{
			setTimeout(async () => {
				await responseLoop(token);
			}, 1000)
		}
		else 
		{
			response.json(tokenResponse.data)
		}
	}
	await responseLoop(token)
})

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})