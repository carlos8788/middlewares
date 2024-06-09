import express from 'express';
import config from './config.js';
import connectToDatabase from './connect.js';
import productRoutes from './routes/api/product.route.js'

const app = express();

app.use(express.json())

connectToDatabase()

app.use('/api/products', productRoutes)

app.listen(config.PORT, console.log(`Listening on ${config.PORT}`));