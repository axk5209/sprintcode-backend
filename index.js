const express = require('express')
const cors = require('cors')
const axios = require("axios");

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

const requestLogger = (request, response, next) => {
	// console.log('Method:', request.method)
	// console.log('Path:  ', request.path)
	// console.log('Body:  ', request.body)
	// console.log('---')
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
	// console.log(body)
	const check = {
		"language_id": languages[body.language],
		"source_code": body.source_code,
		"stdin": body.stdin
	}
	// console.log(check)
	const postResponse = await axios({
		"method": "POST",
		"url": "https://judge0.p.rapidapi.com/submissions",
		"headers": {
			"content-type": "application/json",
			"x-rapidapi-host": "judge0.p.rapidapi.com",
			"x-rapidapi-key": "9b0f31e01fmsh859f41ecd1db8bap19b89fjsn60e1e45356ff",
			"accept": "application/json",
			"useQueryString": true
		}, "data": check
	})

	// response.json({token: postResponse.data.token})
	const token = postResponse.data.token
	response.json(token)
	// let getResponse = await responseLoop(token)
	// console.log(getResponse.data)

	// console.log(token)
	// setTimeout(async () => {
	// 	const getResponse = await axios({
	// 		"method": "GET",
	// 		"url": `https://judge0.p.rapidapi.com/submissions/${token}`,
	// 		"headers": {
	// 			"content-type": "application/octet-stream",
	// 			"x-rapidapi-host": "judge0.p.rapidapi.com",
	// 			"x-rapidapi-key": "9b0f31e01fmsh859f41ecd1db8bap19b89fjsn60e1e45356ff",
	// 			"useQueryString": true
	// 		}
	// 	})
	// 	console.log(getResponse)
	// }, 5000)	
})

app.get('/api/:token', async (request, response) => {
	const token = request.params.token
	async function getTokenResponse(token)
	{
		let getResponse = await axios({
				"method": "GET",
				"url": `https://judge0.p.rapidapi.com/submissions/${token}`,
				"headers": {
					"content-type": "application/octet-stream",
					"x-rapidapi-host": "judge0.p.rapidapi.com",
					"x-rapidapi-key": "9b0f31e01fmsh859f41ecd1db8bap19b89fjsn60e1e45356ff",
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
				//console.log(tokenResponse.data);
			}, 1000)
		}
		else 
		{
			//console.log(tokenResponse.data)
			//console.log("sending")
			response.json(tokenResponse.data)
			//console.log("Still Here for some reason")
		}
	}
	await responseLoop(token)
})

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})



/*
statusText: 'Created',
  headers: {
    'cache-control': 'max-age=0, private, must-revalidate',
    'content-type': 'application/json; charset=utf-8',
    date: 'Tue, 04 Aug 2020 20:33:24 GMT',
    etag: 'W/"92449077d6aa34de5ca165fe7314ac52"',
    server: 'RapidAPI-1.1.24',
    'strict-transport-security': 'max-age=31536000',
    vary: 'Origin',
    'x-rapidapi-region': 'AWS - us-east-1',
    'x-rapidapi-version': '1.1.24',
    'x-ratelimit-individual-submissions-limit': '10000',
    'x-ratelimit-individual-submissions-remaining': '9980',
    'x-request-id': '57c04b16-2e84-438a-bb7f-1ee9912dc707',
    'x-runtime': '0.036570',
    'content-length': '48',
    connection: 'Close'
  },
  config: {
    url: 'https://judge0.p.rapidapi.com/submissions',
    method: 'post',
    data: '{"language_id":50,"source_code":"#include <stdio.h>\\n\\nint main(void) {\\n  char name[10];\\n  scanf(\\"%s\\",name);\\n  printf(\\"hello %s\\\\n\\",name);\\n  return 0;\\n}","stdin":"world"}',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'judge0.p.rapidapi.com',
	  'x-rapidapi-key': '9b0f31e01fmsh859f41ecd1db8bap19b89fjsn60e1e45356ff',
	  useQueryString: true,
      'User-Agent': 'axios/0.19.2',
      'Content-Length': 179
    },


	response: {
    status: 422,
    statusText: 'Unprocessable Entity',
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/json; charset=utf-8',
      date: 'Tue, 04 Aug 2020 20:41:58 GMT',
      server: 'RapidAPI-1.1.24',
      'strict-transport-security': 'max-age=31536000',
      vary: 'Origin',
      'x-rapidapi-region': 'AWS - us-east-1',
      'x-rapidapi-version': '1.1.24',
      'x-ratelimit-individual-submissions-limit': '10000',
      'x-ratelimit-individual-submissions-remaining': '9979',
      'x-request-id': '0c7e82be-c6e3-4f00-bbd6-be3ed10d059e',
      'x-runtime': '0.119687',
      'content-length': '78',
      connection: 'Close'
    },
    config: {
      url: 'https://judge0.p.rapidapi.com/submissions',
      method: 'post',
      data: '{"language_id":25,"source_code":"#include <stdio.h>\\n\\nint main(void) {\\n  char name[10];\\n  scanf(\\"%s\\", name);\\n  printf(\\"hello %s\\\\n\\", name);\\n  return 0;\\n}","stdin":"world"}',
      headers: [Object],
      transformRequest: [Array],
      transformResponse: [Array],
      timeout: 0,
      adapter: [Function: httpAdapter],
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      validateStatus: [Function: validateStatus]
    },
*/