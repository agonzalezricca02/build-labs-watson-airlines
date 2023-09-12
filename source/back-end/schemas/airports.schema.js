import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
    IATA_CODE :String, // Location Identifier.
    AIRPORT :String, // Airport's Name.
    CITY :String, // Airport's City.
    STATE :String, // Airport's State.
    COUNTRY :String, // Airport's Country.
});

const airports = mongoose.model('airports', airportsSchema)

module.exports = airports