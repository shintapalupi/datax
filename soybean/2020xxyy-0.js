/*
	2020xxyy-0.js
	Soybean with type Anjasmoro grown in SITH, ITB, Indonesia
	
	Shinta Palupi (total nitrogen in plant)
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
		value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
	},
	height: {
		unit: "cm",
		value: [0, 11.95, 20.42, 31.25, 60.75, 98.67, 111.83, 135.67, 152.33, 181.50, 190.83, 197.75, 202.95, 208.14],
		sample: 3,
	},
	leaf: {
		unit: "leaf",
		value: [0, 2, 8.67, 14.83, 29.67, 48.50, 33.17, 68.67, 88.17, 119.17, 144.0, 169.50, 137.42, 105.33],
		sample: 2,
	},
	nodules: {
		unit: "g",
		value: [0, 0, 0, 0.15, 0.23, 0.80, 0.50, 0.87, 0.94, 1.93, 6.19, 13.10, 12.55, 12.0],
	},
};


// Push it to main array of Soybean
Soybean.push(soybean);

