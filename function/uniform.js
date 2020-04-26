/*
	uniform.js
	Generate data from uniform distribution
	
	Sparisoma Viridi | https://github.com/dudung
	
	20200426
	1910 Start this function (again).
	1938 Finish dataUniform and classify functions.
	1953 Find problem with the last group in distribution.
	2003 Fix the problem.
	2013 Move classify function to classify.js file.
*/


// Generate N data between min and max with digit
function dataUniform(N, min, max, digit) {
	var N = arguments[0];
	var min = arguments[1];
	var max = arguments[2];
	var digit = arguments[3];
	
	var range = max - min;
	var data = [];
	
	for(var i = 0; i < N; i++) {
		var x = Math.random() * range + min;
		var y = parseFloat(x.toFixed(digit));
		data.push(y);
	}
	
	return data;
}

