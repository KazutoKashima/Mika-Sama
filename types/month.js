<<<<<<< HEAD
const { ArgumentType } = require('discord.js-commando');
const months = require('../assets/json/month');

module.exports = class MonthArgumentType extends ArgumentType {
	constructor(client) {
		super(client, 'month');
	}

	validate(value) {
		const num = Number.parseInt(value, 10);
		if (num > 0 && num < 13) return true;
		if (months.includes(value.toLowerCase())) return true;
		return false;
	}

	parse(value) {
		const num = Number.parseInt(value, 10);
		if (!Number.isNaN(num)) return num;
		return months.indexOf(value.toLowerCase()) + 1;
	}
};
=======
const { ArgumentType } = require('discord.js-commando');
const months = require('../assets/json/month');

module.exports = class MonthArgumentType extends ArgumentType {
	constructor(client) {
		super(client, 'month');
	}

	validate(value) {
		const num = Number.parseInt(value, 10);
		if (num > 0 && num < 13) return true;
		if (months.includes(value.toLowerCase())) return true;
		return false;
	}

	parse(value) {
		const num = Number.parseInt(value, 10);
		if (!Number.isNaN(num)) return num;
		return months.indexOf(value.toLowerCase()) + 1;
	}
};
>>>>>>> 911471a31e69d42a8e7715c4659360a597d8e9b8
