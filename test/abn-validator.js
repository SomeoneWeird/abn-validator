
"use strict";

var assert = require("assert");
var path   = require("path");

var ABN = require(path.resolve(__dirname, "../lib/abn-validator"));

describe("ABN Validator", function() {
	
	it("should return true for valid abns", function() {

		var abns = [ '53 004 085 616', '00 000 000 001' ];

		abns.forEach(function(abn) {
			assert.equal(ABN(abn), true);
		});

	});

	it("should return false for invalid abns", function() {

		var abns = [ '', '0', '00 000 000 000' ];

		abns.forEach(function(abn) {
			assert.equal(ABN(abn), false);
		});

	});

});