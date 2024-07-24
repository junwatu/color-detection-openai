import express from 'express'
import bodyParser from 'body-parser'

const app = express()
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000

app.use(bodyParser.json({ limit: '10mb' }))

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

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
