
"use strict";

var WEIGHTS  = [ 10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ];
var MAGICNUM = 89;

module.exports = function(abn) {
	
	if(typeof abn === 'string') {
		abn = abn.replace(/\s/g, '').replace(/-/g, '').split('');
	}

	if(abn.length != 11) {
		return false;
	}

	abn = abn.map(function(val, index) {
		return val * WEIGHTS[index];
	}).reduce(function(p, w) {
		return p + w;
	}, 0);

	var div = abn % MAGICNUM;

	return !!div;

}