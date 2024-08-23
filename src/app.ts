import express, {json, urlencoded} from 'express'
import swaggerUi from 'swagger-ui-express'


import { RegisterRoutes }   from '../build/routes'
import * as swaggerDocument from '../build/swagger.json'

export const app = express()

// Use body parser to read sent json payloads
app.use(
	urlencoded({
		extended: true,
	})
)
app.use(json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

RegisterRoutes(app)