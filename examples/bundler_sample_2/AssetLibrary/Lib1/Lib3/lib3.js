
var lib1 = require( "Lib1/lib1.js" );
var lib3_helper = require( "./_otherStuff/lib3_helper.js" );

exports.identify = function() {
	return "i am lib3.. i depend on " + lib1.identify() + " and " + lib3_helper.identify();
};