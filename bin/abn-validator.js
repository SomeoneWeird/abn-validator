#!/usr/bin/env node

"use strict";

var path = require("path");
var ABN  = require(path.resolve(__dirname, "../lib/abn-validator"));

var abn = process.argv.splice(2).join("");

if(!abn) {
	console.error("abn-validator <abn>");
	process.exit(1);
}

var valid = ABN(abn);

if(valid) {
	console.log("Valid ABN");
} else {
	console.log("Invalid ABN");
}
