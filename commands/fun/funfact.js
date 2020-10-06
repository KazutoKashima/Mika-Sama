const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class funFact extends Command {
	constructor(client) {
		super(client, {
			name: 'funfact',
			group: 'fun',
			memberName: 'funfact',
			description: 'Sends a fun fact!',
			aliases: ['fun fact', 'fact'],
			usage: '[command name]',
			cooldown: 2,
		});
	}
	
	async run(message) {
		try {
			var facts = ["Banging your head against a wall for one hour burns 150 calories.", "In Switzerland it is illegal to own just one guinea pig.", "Pteronophobia is the fear of being tickled by feathers.", "Snakes can help predict earthquakes.", "A flock of crows is known as a murder.", "The oldest “your mom” joke was discovered on a 3,500 year old Babylonian tablet.", "So far, two diseases have successfully been eradicated: smallpox and rinderpest.", "29th May is officially “Put a Pillow on Your Fridge Day”.", "Cherophobia is an irrational fear of fun or happiness.", "7% of American adults believe that chocolate milk comes from brown cows.", "If you lift a kangaroo’s tail off the ground it can’t hop.", "Bananas are curved because they grow towards the sun.", "Billy goats urinate on their own heads to smell more attractive to females.", "The inventor of the Frisbee was cremated and made into a Frisbee after he died.", "During your lifetime, you will produce enough saliva to fill two swimming pools.", "If Pinocchio says “My Nose Will Grow Now”, it would cause a paradox.", "Polar bears __could__ eat as many as 86 penguins in a single sitting…", "King Henry VIII slept with a gigantic axe beside him.", "Movie trailers were originally shown after the movie, which is why they were called “trailers”.", "An eagle can kill a young deer and fly away with it."];
			var fact = Math.floor(Math.random()*facts.length);
		
			let factEmbed = new MessageEmbed()
			.setColor('#ffffff')
			.setTitle("Fun Fact!")
			.setDescription(`${facts[fact]}`)
			.setFooter("*I love these!*")
		
			message.embed(factEmbed);
		}
		catch(err) {
			console.log(err.stack);
			message.channel.send(`Sorry ${message.author.name}, but there has been an error!\nKaz will fix this when he can, please be patient`);
		}
	}
};