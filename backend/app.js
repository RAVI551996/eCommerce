const express = require('express');
const app = express();

const errorMiddleware = require("./middleware/error")
app.use(express.json())
// Import routes
const product = require('./routes/productRoutes');
const createProduct= require('./routes/productRoutes');

app.use('/api/v1',product)
app.use('/api/v1',createProduct)

// Middleware for error
app.use(errorMiddleware);

module.exports= app;