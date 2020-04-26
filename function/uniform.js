/*
	uniform.js
	Generate data from uniform distribution
	
	Sparisoma Viridi | https://github.com/dudung
	
	20200426
	1910 Start this function (again).
	1938 Finish dataUniform and classify functions.
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


// Classify data to N group
function classify(data, N, min, max) {
	var data = arguments[0];
	var N = arguments[1];
	var xmin = arguments[2];
	var xmax = arguments[3];
	
	var x = [];
	var y = [];
	
	var dx = (xmax - xmin) / N;
	
	for(var i = 0; i < N; i++) {
		var xi = (i + 0.5) * dx;
		x.push(xi);
		y.push(0);
	}
	
	var M = data.length;
	for(var i = 0; i < M; i++) {
		var j = Math.floor((data[i] - min) / dx)
		if(j < y.length) {
			y[j]++;
		}
	}
	
	return {x: x, y: y};
}

