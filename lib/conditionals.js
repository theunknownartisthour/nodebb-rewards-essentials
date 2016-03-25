"use strict";

var conditionals = {};

conditionals.get = function(conditionals, callback) {
	conditionals = conditionals.concat([
		{
			"name": ">",
			"conditional": "greaterthan"
		},
		{
			"name": ">=",
			"conditional": "greaterorequalthan"
		},
		{
			"name": "<",
			"conditional": "lesserthan"
		},
		{
			"name": "<=",
			"conditional": "lesserorequalthan"
		},
		{
			"name": "string:",
			"conditional": "string"
		},
		{
			"name": "timestamp:",
			"conditional": "timestamp"
		},
		{
			"name": "timestamp inverse:",
			"conditional": "timestampinverse"
		},
	]);

	callback(false, conditionals);
};


conditionals.greaterthan = function(data, callback) {
	callback(false, parseInt(data.left) > parseInt(data.right));
};

conditionals.greaterorequalthan = function(data, callback) {
	callback(false, parseInt(data.left) >= parseInt(data.right));
};

conditionals.lesserthan = function(data, callback) {
	callback(false, parseInt(data.left) < parseInt(data.right));
};

conditionals.lesserorequalthan = function(data, callback) {
	callback(false, parseInt(data.left) <= parseInt(data.right));
};

conditionals.string = function(data, callback) {
	callback(false, data.left === data.right);
};

conditionals.timestamp = function(data, callback) {
	var currentTime = Date.now();
	var timeSinceLastLogin = parseInt(currentTime,10) - parseInt(data.left,10);
	callback(false, timeSinceLastLogin < parseInt(data.right));
};

conditionals.timestampinverse = function(data, callback) {
	var currentTime = Date.now();
	var timeSinceLastLogin = parseInt(currentTime,10) - parseInt(data.left,10);
	callback(false, timeSinceLastLogin > parseInt(data.right));
};


module.exports = conditionals;
