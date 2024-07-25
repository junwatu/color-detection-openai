import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import { __dirname } from './dirname.js'

const app = express()

// eslint-disable-next-line no-undef
if (!process.env.VITE_APP_URL) {
	throw new Error('VITE_APP_URL environment variable is not set')
}

// eslint-disable-next-line no-undef
const apiURL = new URL(process.env.VITE_APP_URL)
const HOSTNAME = apiURL.hostname || 'localhost'
const PORT = apiURL.port || 4000

app.use(bodyParser.json({ limit: '10mb' }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, "public")))

app.post('/process-image', (req, res) => {
	const { image } = req.body

	if (!image) {
		return res.status(400).json({ error: 'No image provided' })
	}

	// For demonstration, we'll just simulate a response
	const simulatedResponse = {
		choices: [
			{
				message: {
					content: 'Processed image successfully'
				}
			}
		]
	}

	res.json(simulatedResponse)
})

app.listen(PORT, HOSTNAME, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
