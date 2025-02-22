const { request, response } = require('express')

// Mongoose Schemas
const Airlines = require('../schemas/airline.schema')

/**
 * Airline Controller
 * @param {JSON} req request information
 * @param {JSON} res response information
 * @returns {JSON} return description
 */
const getAllAirlines = async (req = request, res = response) => {
  // Returns all Airline objects under "result" field
  // #swagger.description = 'Returns list of all airlines'
  /* #swagger.responses[200] = {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                    "type" : "object",
                    "properties" : {
                        "result" : {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/Airline"
                            }
                        }
                    }
                }
              }
            }
        }   
    */
  try {
    const result = await Airlines.find({}).select('-_id')
    res.json({
      result: result,
    })
  } catch (error) {
    res.json({
      status: error.status,
    })
  }
}

module.exports = {
  getAllAirlines,
}