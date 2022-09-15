const express = require('express')
const api = require('./server_modules/api')
const { unescape } = require('querystring'); 
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000


app.get('/', async (req, res) => {
  res.sendFile(__dirname + '/website/index.html')
})


app.get('/api', async (req, res) => {
  let apiResponse = await api(req)
  res.send(apiResponse)
})

app.get('*', async (req, res) => {
	let url = unescape(req.url)
	let path = url.split("/").filter(element => { return element !== ''; });
	let file = path.pop();
	file = file.replaceAll(/\?.*$/gm, "")

	try{
		if (!file.includes(".")){ // if no filetype is specified, set filetype to .html
			file += ".html";
		}
	} catch(e){}

	let directory = "";
	path.forEach(Element => directory+=Element+"/")

	if (fs.existsSync(__dirname + '/website/' + directory + file)) {
		res.sendFile(__dirname + '/website/' + directory + file);
	}
	else{
		res.sendFile(__dirname + '/website/' + "404.html")
	}
})

app.listen(port, async () => {
  console.log(`App listening at http://localhost:${port}`)
})