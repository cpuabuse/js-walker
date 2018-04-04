var jsw = require('./js-walker.js');

var defs = {
	hello: console.log,
	bye: console.log
};

var greetingWalker = new jsw(defs);

var thing = {
	hello: "How are you?"
}

greetingWalker.walk(thing);