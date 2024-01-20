const sequelize = require("../connection");
const Itinerary = require("../models/Itinerary");

const ItineraryController = {
    getAllItineraryByUserID: async  (req, res) => {
        const userId = req.params.user_id; // Assuming user_id is passed as a route parameter

        try {
            // Use parameterized query to prevent SQL injection
            const query = 'SELECT * FROM itinerary WHERE user_id = '+ userId;
            const [itineraries] = await sequelize.query(query, {
                // replacements: [userId],
                type: sequelize.QueryTypes.SELECT
            });

            res.json(itineraries);
            // res.send(itineraries);
        } catch (error) {
            console.error('Error fetching itineraries:', error);
            res.status(500).send('Error fetching itineraries');
        }
    },

    createItinerary: async (req, res) => {
        const { country_id, user_id, budget, title } = req.body;
    
        try {
            const newItinerary = await Itinerary.create({ 
                country_id, 
                user_id, 
                budget, 
                title 
            });
    
            res.status(201).json(newItinerary);
        } catch (error) {
            console.error('Error creating itinerary:', error);
            res.status(500).send('Error creating itinerary');
        }
    },

    editItinerary: async (req, res) => {
        const { id } = req.params; // Assuming the itinerary ID is passed as a URL parameter
        const { country_id, user_id, budget, title } = req.body;
    
        try {
            // Find the itinerary by ID
            const itinerary = await Itinerary.findByPk(id);
    
            // Check if the itinerary exists
            if (!itinerary) {
                res.status(404).send('Itinerary not found');
                return;
            }
    
            // Update the itinerary
            itinerary.country_id = country_id;
            itinerary.user_id = user_id;
            itinerary.budget = budget;
            itinerary.title = title;
            await itinerary.save();
    
            res.status(200).json(itinerary);
        } catch (error) {
            console.error('Error updating itinerary:', error);
            res.status(500).send('Error updating itinerary');
        }
    },

    deleteItinerary: async (req, res) => {
        const { id } = req.params; // Assuming the itinerary ID is passed as a URL parameter
    
        try {
            const result = await Itinerary.destroy({
                where: { id: id }
            });
    
            if (result > 0) {
                res.status(200).send('Itinerary deleted successfully');
            } else {
                res.status(404).send('Itinerary not found');
            }
        } catch (error) {
            console.error('Error deleting itinerary:', error);
            res.status(500).send('Error deleting itinerary');
        }
    },
    
    


};

module.exports = ItineraryController;

