const path = require("path");
const mongoose = require('mongoose');
const mongo = require('./mongodb/mongodb');

async function main(){
   // const mon = mongodb()
    // Get global variables from .env file
    require('dotenv').config({path: path.resolve(__dirname,'.env')})

    // Connect to database
    const { create_connection } = require('./mongodb/mongodb');
    await create_connection();   
    
    
    
    
}

main();