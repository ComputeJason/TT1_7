const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/Itinerary');


router.get('/:user_id', itineraryController.getAllItineraryByUserID);
router.post('/CreateItinerary', itineraryController.createItinerary);
router.put('/editItinerary/:id', itineraryController.editItinerary);
router.delete('/deleteItinerary/:id', itineraryController.deleteItinerary);


module.exports = router;