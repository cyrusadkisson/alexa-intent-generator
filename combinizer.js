//var bits = [
//	    ["change", "set"],
//	    ["the", "my", ""],
//	    ["global"],
//	    ["{signalType}"],
//	    ["input", ""],
//	    ["gain", "level", "trim"],
//	    ["to {dbVal}"],
//	    ["d b", "decibels", ""]    
//	];

//var bits = [
//	    ["change", "set"],
//	    ["the", "my", ""],
//	    ["global"],
//	    ["input", ""],
//	    ["gain", "level", "trim"],
//	    ["for {signalType} songs to"],
//	    ["{dbVal}"],
//	    ["d b", "decibels", ""]    
//	];

//var bits = [
//    ["change", "set"],
//    ["the", "my", ""],
//    ["global"],
//    ["{signalType}"],
//    ["acoustic simulator", "acoustic sim", ""],
//    ["impulse response", "eye are"], 
//    ["source", ""],
//    ["to {irType}"]    
//];

//var bits = [
//    ["change", "set"],
//    ["the", "my", ""],
//    ["global"],
//    ["acoustic simulator", "acoustic sim", ""],
//    ["impulse response", "eye are"], 
//    ["source", ""],
//    ["for {signalType} songs"],
//    ["to {irType}"]    
//];

//var bits = [
//    ["show me", "list", "show", "display"],
//    ["genres", "categories"]
//];

//var bits = [
//	["show", "display", "list", "show me some", "show me", "display some", "list some"],
//	["songs", "music"],
//	["from the", "in the"],
//	["{genre}"],
//	["genre", "category", ""]
//	];

//var bits = [
//	["show", "display", "list", "show me"],
//	["your", "a list of", "the", "some"],
//	["amps", "amplifiers", "amplifier models"]
//	];

//var bits = [
//	["what"],
//	["amps", "amplifiers", "amplifier models"],
//	["are available", "do you have"]
//	];

//var bits = [
//	["activate", "turn on", "enable", "give me"],
//	["the", "some", "a", ""],
//	["{effectName}"]
//	];

//var bits = [
//["deactivate", "turn off", "disable", "remove", "undo",],
//["the", "some", "a", ""],
//["{effectName}"]
//];

var bits = [
	["shimmy", "boogie", "mesa boogie"],
	["rectifier", "dual rectifier", "triple rectifier", "jack", "jack series", "mark" ],
	];

function getCombinations(firstArrayOfStrings, secondArrayOfStrings)
{
	var returnArray = [];
	firstArrayOfStrings.forEach( function(item1) {
		secondArrayOfStrings.forEach( function (item2) {
			if (item2.length === 0)
				returnArray.push(item1 + item2);
			else
				returnArray.push(item1 + " " + item2);
		});
	});
	return returnArray;
}

function generateAlexaIntentCsv()
{
	var b = 1;
	var growingCombinations = [];
	var singleShotCombinations = [];
	while(b < bits.length)
	{
		if(b === 1)
		{
			growingCombinations = getCombinations(bits[b-1], bits[b]);
		}
		else
		{
			growingCombinations = getCombinations(growingCombinations, bits[b]);
		}	
		b++;
	}	
	
	// a/an corrections
	// FIXME this will fuck up anything with an "a" that isn't the "a" we're looking for. Like " a a a r p membership" will come out " an an an r p membership" 
	// FIXME this does not consider many edge cases like "a/an m and m" or "a/an x-ray" or "an honest person"
	var outputCsv = "";
	growingCombinations.forEach(function(s){
		if(s.indexOf(" a a") !== -1)
			s = s.replace(" a a", " an a");
		else if(s.indexOf(" a e") !== -1)
			s = s.replace(" a e", " an e");
		else if(s.indexOf(" a i") !== -1)
			s = s.replace(" a i", " an i");
		else if(s.indexOf(" a o") !== -1)
			s = s.replace(" a o", " an o");
		else if(s.indexOf(" a us") !== -1)
		{
			// this is the most common exception. "user", "usurper", do not change to "an".
		}
		else if(s.indexOf(" a u") !== -1)
			s = s.replace(" a u", " an u");
		
		outputCsv = outputCsv + s + "\n";
	});
	outputCsv = outputCsv.substring(0,outputCsv.length-1);
	console.log(outputCsv);
}

generateAlexaIntentCsv();