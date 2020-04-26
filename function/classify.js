/*
	classify.js
	Classify generated data into some groups
	
	Sparisoma Viridi | https://github.com/dudung
	
	20200426
	1953 Find problem with the last group in distribution.
	2003 Fix the problem.
	2012 Move the function from uniform.js file.
	2013 Note To-Do in normalize the result.
*/


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
		var j = Math.floor((data[i] - xmin) / dx)
		if(j < y.length) {
			y[j]++;
		} else {
			y[y.length-1]++;
		}
	}
	
	return {x: x, y: y};
}

