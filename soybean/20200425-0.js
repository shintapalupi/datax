/*
	20200425-0.js
	Soybean (Glycine max (L.) Merril) cv. BMX Ícone WTA = 10 kPA
	
	Sparisoma Viridi (JS conversion)
	
	20200425
	0520 Continue digitizing from [1] using [2].
	0538 Get confuse with name convention var. and cv. [3].
	0541 Redigitize with [2] after find every 2 days in [1].
	0622 Finish digitizing for WTA = 10 kPa.
	0714 Change form of parameter section.
	0716 Change value to range for values with range.
	0736 Push object to main array.
	0741 Rename the file to glyma-cv._BMX_Icone-Brazil-WTA10.
	0743 Finish adding source, method is not yet fixed.
	0806 Rename it (again) to 20200425-0.
		
	References
	1. Pâmela de Andrades Timm, Marília Alves Brito Pinto, José
	   Maria Barbat Parfitt, Germani Concenço, Alexssandra
	   Dayanne Soares de Campos, Thayse do Amaral Aires,
	   Jaqueline Trombetta da Silva, Lessandro Coll Faria,
	   "Initial Growth and Roots Development of Soybean as
	   Function of Water Availability and Soil Bulk Density",
	   Journal of Agricultural Science [J. Agric. Sci.], vol. 11,
	   no. 16,  pp. 213-222, Sep 2019, url
	   https://doi.org/10.5539/jas.v11n16p213
	2. Ankit Rohatgi, "WebPlotDigitizer: Web based tool to
	   extract data from plots, images, and maps", Version 4.2
	   Released (April 7, 2019), url
	   https://automeris.io/WebPlotDigitizer [20200425]
	3. Cindy Haynes, "Cultivar versus Variety", Horticulture and
	   Home Pest News, Iowa State University, 6 Feb 2008, url
	   https://hortnews.extension.iastate.edu/2008/2-6
	   /CultivarOrVariety.html [20200425]
*/


var soybean = {
	species: "Glycine max",
	variety: "cv. BMX Ícone",
	environment: "green house",
	place: "Rio Grande do Sul, Brazil",
	date: "October 2017 (sowed)",
	source: {
		url: "https://doi.org/10.5539/jas.v11n16p213",
		object: {
			type: "figure",
			number: 1,
			label: "SWT = 10 kPA",
		},
		method: {
			application: "WebPlotDigitizer",
			creator: "Ankit Rohatgi",
			algoritm: "X Step with Interpolation",
		},
	},
	parameter: {
		swt: {
			name: "soil water tension (SWT)",
			value: 10,
			unit: "kPa",
		},
		bd: {
			name: "soil bulk density (BD)",
			range: {min: 1.4, max: 2.0},
			unit: "kg/dm^3",
		}
	},
	age: {
		unit: "day",
		value: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54],
	},
	height: {
		unit: "cm",
		value: [4.3, 5.0, 5.9, 6.8, 7.7, 8.7, 9.7, 11.2, 12.6, 13.8, 14.8, 15.8, 16.8, 18.0, 19.1, 20.5, 21.8, 23.2, 24.7, 26.5, 28.1, 30.1, 31.8, 33.8, 35.7, 37.8, 40.0],
	},
};


// Push it to main array of Soybean
Soybean.push(soybean);

