/*
	org-dest-matrix-bdo.js
	Matrix of origin-destination of regions in Bandung city
	
	Lili Somantri (source of data)
	Sparisoma Viridi (JS form)
	
	20200417
	1730 Start to write the matrix from the paper.
	1757 Finish digitizing dan think about a namespace.
	
	References
	1. Lili Somantri, "The Spatial Interaction of Bandung Citizens", Indonesian Journal of Geography [Indones. J. Geogr.], vol. 45, no. 2, pp, 116-124, Dec 2013, url https://doi.org/10.22146/ijg.4868
*/

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

// District name
var DM = [
"Arcamanik",
"Bojonagara",
"Cibeunying",
"Gedebage",
"Karees",
"Kordon",
"Tegallega"
"Ujungberung"
];
