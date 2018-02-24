// we assume no punctuation nor case in magazine text
const harmlessRansomNote = (noteText, magazinText) => {
	// change the input strings into arrays of words
	const noteArray = noteText.split(' ');
	const magazinArray = magazinText.split(' ');
	const magazinObject = {};

	// add each word in magazine as property of magazineObject & count occurrences
	magazinArray.forEach( word => {
		// initialize word property in object
		if(!magazinObject[word]) magazinObject[word] = 0;
		
		// increment at each new occurrence
		magazinObject[word]++;
	});


	let noteIsPossible = true;
	
	// check of each word on noteArray is present on magazineObject
	noteArray.forEach( word => {
		// decrement magazine word occurrences when note word found
		if(magazinObject[word]) {
			magazinObject[word]--;
			// check if enough word occurrences in magazine to make note
			if(magazinObject[word] < 0)
				 noteIsPossible = false;
		}
		// word not found in maazine so note is not possible
		else noteIsPossible = false;
	});

	return console.log(`The ransom note is ${noteIsPossible ? '' : 'not '}writable with the magazine`);
}

harmlessRansomNote('this is a note','this is a not random at all text to see if the function is working')
