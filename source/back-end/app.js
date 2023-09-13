const path = require("path");
const mongoose = require('mongoose');
const mongo = require('./mongodb/mongodb');
const express = require('express')

async function main(){
   // const mon = mongodb()
   const app = express()
    // Get global variables from .env file
    require('dotenv').config({path: path.resolve(__dirname,'.env')})

    // Connect to database
    const { create_connection, close_connection } = require('./mongodb/mongodb');
    await create_connection();   
    
    ///////////////
     // Middleware to parse incoming request bodies
  app.use(express.json())

  // Import API routes
  const flightRoutes = require('./routes/flights.route')
  const airportRoutes = require('./routes/airports.route')
  const airlineRoutes = require('./routes/airlines.route')

  // Use api routes
  app.use('/api', flightRoutes)
  app.use('/api', airportRoutes)
  app.use('/api', airlineRoutes)

  // Middleware for error handling
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ message: err.message })
  })

  // Handle process termination
  process.on('SIGINT', async () => {
    console.log('Closing server and database connections...')
    await close_connection()
    process.exit(0)
  })

  // Start the server
  
  const port = process.env.PORT || 8080
  app.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
   
    
}

main();