/*
	org-dest-matrix-bdo.js
	Matrix of origin-destination of regions in Bandung city
	according to a development area grouping [1]
	
	Lili Somantri (source of data)
	Sparisoma Viridi (JS form)
	
	20200417
	1730 Start to write the matrix from the paper.
	1757 Finish digitizing dan think about a namespace.
	1906 Add development area coverage.
	1950 Add district, population, householder data.
	1954 Add total sample.
	
	References
	1. Lili Somantri, "The Spatial Interaction of Bandung Citizens", Indonesian Journal of Geography [Indones. J. Geogr.], vol. 45, no. 2, pp, 116-124, Dec 2013, url https://doi.org/10.22146/ijg.4868
*/


// Total samples
var TS = 700;


// Origin (row) - Destination (column) matrix
var ODM = [
	[10, 0, 23, 0, 4, 11, 0, 10],
	[0, 83, 17, 0, 5, 0, 3, 2],
	[25, 14, 36, 0, 5, 1, 28, 15],
	[4, 0, 0, 20, 3, 4, 0, 0],
	[5, 0, 10, 0, 75, 3, 18, 3],
	[1, 0, 12, 1, 7, 16, 3, 4],
	[0, 13, 15, 0, 14, 9, 108, 1],
	[13, 0, 11, 10, 1, 0, 0, 24],
];


// Development area name and related district
var DAND = [
	["Arcamanik", ["Antapani", "Arcamanik", "Mandalajati"]],
	["Bojonagara", ["Andir", "Cicendo", "Sukajadi", "Sukasari"]],
	["Cibeunying", ["Cidadap", "Coblong", "Bandung Wetan", "Cibeunying Kidul", "Cibeunying Kaler", "Sumur Bandung"]],
	["Gedebage", ["Gedebage", "Rancasari"]],
	["Karees", ["Regol", "Lengkong", "Batununggal", "Kiaracondong"]],
	["Kordon", ["Bandung Kidul", "Buahbatu"]],
	["Tegallega", ["Astana Anyar", "Bojongloa Kidul", "Bojongloa Kaler", "Babakan Ciparay", " Bandung Kulon"]],
	["Ujungberung", ["Panyileukan", "Ujungberung", "Cibiru", "Cinambo"]],
];


// Development area sample (2013)
var DAS = [
	["Arcamanik", 58],
	["Bojonagara", 110],
	["Cibeunying", 124],
	["Gedebage", 31],
	["Karees", 114],
	["Kordon", 44],
	["Tegallega", 160],
	["Ujungberung", 59],
];


// District, Population, Householder (2013)
var DPH = [
	["Andir", 94230, 14851],
	["Cicendo", 96319, 15180],
	["Sukajadi", 104804, 16513],
	["Sukasari", 79211, 14127],
	["Cidadap", 56312, 11872],
	["Coblong", 127515, 25018],
	["Bandung Wetan", 29806, 7006],
	["Cibeunying Kidul", 104512, 20508],
	["Cibeunying Kaler", 68808, 14273],
	["Sumur Bandung", 34184, 10225],
	["Astanaanyar", 66649, 13856],
	["Bojongloa Kidul", 82450, 17144],
	["Bojongloa Kaler", 117218, 24369],
	["Babakan Ciparay", 143151, 29761],
	["Bandung Kulon", 138644, 28824],
	["Regol", 79127, 20389],
	["Lengkong", 69307, 15466],
	["Batununggal", 115572, 4365],
	["Kiaracondong", 127521, 26285],
	["Panyileukan", 37691, 7632],
	["Ujungberung", 72414, 14663],
	["Cibiru", 67412, 13649],
	["Cinambo", 23683, 4795],
	["Gedebage", 34299, 5227],
	["Rancasari", 7406, 11034],
	["Bandung Kidul", 57398, 8749],
	["Buahbatu", 92140, 14042],
	["Antapani", 72006, 14581],
	["Arcamanik", 64830, 13128],
	["Mandalajati", 60822, 12316],
];

