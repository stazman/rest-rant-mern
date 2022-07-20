const React = require('react')
const router = require("express").Router();

// GET /places
router.get('/', (req, res) => {

	let places = [{
		name: 'H-Thai-ML',
		city: 'Seattle',
		state: 'WA',
		cuisines: 'Thai, Pan-Asian',
		pic: 'http://placekitten.com/250/250'
	}, {
		name: 'Coding Cat Cafe',
		city: 'Phoenix',
		state: 'AZ',
		cuisines: 'Coffee, Bakery',
		pic: 'http://placekitten.com/250/250'
	}]
	
	//new

	//show

	//edit

	res.render('places/index', {places})
})

module.exports = router