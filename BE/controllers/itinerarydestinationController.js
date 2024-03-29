// Code to execute business logic from requests
const sequelize = require('../connection')
const ItineraryDestination = require('../models/ItineraryDestination')
const { Op } = require("sequelize");
// `SELECT * FROM ItineraryDestination where itinerary_id = ${id}`

exports.getDestinationNameByItineraryId = async (req, res, next) => {
	// try {
    //     const itineraryDestination = await ItineraryDestination.findAll({
	// 		where: {
	// 			itinerary_id: {
	// 				[Op.eq]: id
	// 			}
	// 		}
	// 	});
	// 	//console.log(countries)
    //     res.json(itineraryDestination);
    // }
	const itineraryId = req.params.id
	const sql = `
        SELECT b.* 
        FROM itinerary_destination AS a 
        JOIN destination AS b ON a.destination_id = b.id 
        WHERE a.itinerary_id = `+ itineraryId ;

    try {
        const destinations = await sequelize.query(sql, {
            //replacements: { itineraryId: itineraryId },
            type: sequelize.QueryTypes.SELECT
        });

        res.json(destinations);
    }  catch (err) {
        console.error(`Error while getting countries`, err.message);
        next(err);
    }
};

exports.getItineraryDestinationById = async (req, res, next) => {
    const itineraryId = req.params.id
	try {
        const itineraryDestination = await ItineraryDestination.findAll({
			where: {
				itinerary_id: {
					[Op.eq]: itineraryId
				}
			}
		});
		//console.log(countries)
        res.json(itineraryDestination);
    }  catch (err) {
        console.error(`Error while getting countries`, err.message);
        next(err);
    }
};

exports.deleteItineraryDestination = async (req, res, next) => {
    const id = req.params.id
	try {
        const result = await ItineraryDestination.destroy({
            where: { id: id }
        });

        if (result > 0) {
            res.status(200).send('ItineraryDestination deleted successfully');
        } else {
            res.status(404).send('ItineraryDestination not found');
        }
    } catch (error) {
        console.error('Error deleting itinerary destination:', error);
        res.status(500).send('Error deleting itinerary destination');
    }
}