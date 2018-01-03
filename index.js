`use strict`;

const log = require('single-line-log').stdout;

var switches = [],
	count = 0;

for (var i = 1; i <= 1000000; i++) {
	for (var j = i; j <= 1000000; j = j + i) {
		if(switches[j] == false || typeof switches[j] === 'undefined') switches[j] = true;
		else switches[j] = false;
	}

	for (var k = 1; k <= 1000000; k++) {
		if(switches[k] == true) count++;
	}

	log("Iteration: " + i + " / Count: " + count);
	count = 0;
}


for (var i = 1; i <= 1000000; i++) {
	if(switches[i] == true) count++;
}

console.log("Switches On: " + count);