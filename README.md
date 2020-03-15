# AlexaIntentGenerator

Inside Amazon's Alexa developer console, you set up new "intents" so that when a user speaks, your skill code can perform an action. A frequent problem I've encountered is the exponential growth of the possible utterances I 
need to handle when substituting similar words. 

It starts out easy...

*"Alexa, show me a photo/picture/image"*

Ok that's three possible utterances...

*"Alexa show me a photo/picture/image of a boat/ship"*

Now we're up to 6. This is starting to look dicey.

*"Alexa show me a large/big, photo/picture/image of a violet/purple boat/ship on the ocean/sea"*

48 combinations. You see the problem.

This is a quick-and-dirty script for generating large combinations of words and phrases so you can paste them into the developer console.

## Usage

Edit the code to insert your interchangeable words, then run the script. Example:

```javascript

var bits = [
	["show me a", "display a"],
	["picture", "photo", "image"],
	["of a"],
	["violet", "purple"],
	["boat", "ship"]
];
```
results in 
```
show me a picture of a violet boat
show me a picture of a violet ship
show me a picture of a purple boat
show me a picture of a purple ship
show me a photo of a violet boat
show me a photo of a violet ship
show me a photo of a purple boat
show me a photo of a purple ship
show me an image of a violet boat
show me an image of a violet ship
show me an image of a purple boat
show me an image of a purple ship
display a picture of a violet boat
display a picture of a violet ship
display a picture of a purple boat
display a picture of a purple ship
display a photo of a violet boat
display a photo of a violet ship
display a photo of a purple boat
display a photo of a purple ship
display an image of a violet boat
display an image of a violet ship
display an image of a purple boat
display an image of a purple ship
```

Then you just ctrl-c the block of utterances and paste them into the Alexa developer console under the bulk import option.

## Developing

Scripting the English language is challenging because of all the edge cases. I was in a rush when I created this and did not attempt to handle things like "an x-ray" or "an m and m" or "an honest person" (although I did handle "a user", etc).

### Improvements

I'm sure this can easily be improved. And should probably be recursive or something. Please submit a pull request if you want to add code to handle edge cases.

