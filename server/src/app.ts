import cors from 'cors'
import express, {json, urlencoded} from 'express'
import swaggerUi from 'swagger-ui-express'


import { RegisterRoutes }   from '../build/routes'
import * as swaggerDocument from '../build/swagger.json'

export const app = express()

const corsOptions = {
	origin: 'http://localhost:5173',
	optionSuccessStatus: 200
}

// Use body parser to read sent json payloads
app.use(
	urlencoded({
		extended: true,
	})
)
app.use(json())
app.use(cors(corsOptions))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

RegisterRoutes(app)