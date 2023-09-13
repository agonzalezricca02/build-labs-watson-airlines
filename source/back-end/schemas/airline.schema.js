const mongoose = require('mongoose');
const { Schema } = mongoose;

const airlinesSchema = new Schema({
    IATA_CODE : String, // Airline's Identifier.
    AIRLINE : String,   // Airline's Name.
  });

  const airlines = mongoose.model('airlines', airlinesSchema)

module.exports = airlines