/**
 * @module JSWalker
 */

/**
 * @static
 * @memberof module:JSWalker
 */
module.exports = class JSWalker{
	/** 
	 * 
	 * @param {object} defs Definitions
	 */
	constructor(defs){
		console.log("Hello world.");

		/**
		 * Definitions to allowed things.
		 * @inner
		 */
		this.defs = defs;
	}

	walk(thing){
		switch(typeof thing){
			// String
			case "string":
			break;

			// Object
			case "object":
			if(Array.isArray(thing)){ // Array
				
			} else { // Truely object
				console.log(thing.hello);
			}
			break;

			// Number
			case "number":
			break;

			default:

			}
		}
};