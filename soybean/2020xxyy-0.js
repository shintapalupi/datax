/*
	2020xxyy-0.js
	Soybean with type Anjasmoro grown in SITH, ITB, Indonesia
	
	Shinta Palupi (water?)
	.. (..)
	.. (..)
	Pingkan Aditiawati (supervisor)
	Sparisoma Viridi (JS conversion)
	
	20200425
	1549 Make this as template for easy updating.
*/

var soybean = {
	species: "Glycine max",
	variety: "Anjasmoro",
	environment: "screen house",
	place: "Jatinangor, Indonesia",
	date: "2019",
	age: {
		unit: "week",
		value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
	},
	height: {
		unit: "cm",
		value: [0, 6, 9.833, 15.9, 31.9, 36.815, 41.73, 34.25, 53.95, 69.267, 56.75, 91, 103.75, 78.45, 60.25],
		sample: 2,
	},
	leaf: {
		unit: "",
		value: [0, 1, 2, 9, 15, 20, 24, 33, 25, 31, 57, 60, 89, 43, 83],
		sample: 2,
	},
	chlorophyll: {
		unit: "mg/L",
		value: [-1, -1, -1, -1, -1, 12.62, 18.83, 24.63, 25.79, 28.67, 29.59, 28.74, 28.63, 26.96, 15.01],
	},
};


// Push it to main array of Soybean
Soybean.push(soybean);

