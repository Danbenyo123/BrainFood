const express = require('express');
const app = express();
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorhandler');

// load env vars
dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT;

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
    app.use(logger);
}

// JSON parsing req body
app.use(express.json());

// Routes files
const notes = require('./routes/notes');
// Mount Routers
app.use('/api/v1/notes',notes);

app.use(errorHandler);

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));