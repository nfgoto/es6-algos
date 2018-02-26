/**
 * HARMLESS RANSOM NOTE ALGORITHM
 * 
 * Purpose:
 * verify that enough words in magazine to write note
 * we assume no punctuation nor case in magazine text
 * 
 * Time complexity: O(n)
 * 
 * @param {string} noteText 
 * @param {string} magazineText 
 */
const harmlessRansomNote = (noteText, magazineText) => {
	// change the input strings into arrays of words
	const noteArray = noteText.split(' ');
	const magazinArray = magazineText.split(' ');
	const magazinObject = {};

	// using an object as a hashtable
	// add each word in magazine as property key of magazineObject & count occurrences
	magazinArray.forEach( magazineWord => {
		// initialize word property in object
		if(!magazinObject[ magazineWord ]) magazinObject[ magazineWord ] = 0;
		
		// increment at each new occurrence
		magazinObject[ magazineWord ]++;
	});


	let noteIsPossible = true;
	
	// check of each word on noteArray is present on magazineObject
	noteArray.forEach( noteWord => {
		// decrement magazine word occurrences when note word found
		if(magazinObject[ noteWord ]) {
			magazinObject[ noteWord ]--;
			// check if enough word occurrences in magazine to make note
			if(magazinObject[ noteWord ] < 0)
				 noteIsPossible = false;
		}
		// word not found in maazine so note is not possible
		else noteIsPossible = false;
	});

	return console.log(`The ransom note is ${noteIsPossible ? '' : 'not '}writable with the magazine`);
}

harmlessRansomNote('this is a note','this is a not random at all text to see if the function is working')
