const mongoose = require('mongoose');
const { Schema } = mongoose;

const flightsSchema = new Schema({
    AIRLINE : String, // Airline Identifier.
    FLIGHT_NUMBER : Number, // Flight Identifier.
    ORIGIN_AIRPORT: String, // Starting Airport (IATA Code).
    DESTINATION_AIRPORT :String, // Destination Airport (IATA Code).
    CANCELLED : Boolean, // Indicates whether flight was cancelled.
    DEPARTURE_DATE : Date, // Flight Departure Date & Time. Format yyyy-mm-dd hh:mm:ss.
    ARRIVAL_DATE : Date, // Flight Arrival Date & Time. Format yyyy-mm-dd hh:mm:ss.
});

const flights = mongoose.model('flights', flightsSchema)

module.exports = flights
