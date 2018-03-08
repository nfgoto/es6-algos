/**
 * FIZZBUZZ ALGORITHM
 * 
 * Print 'Fizz' for numbers divisible by 3
 * Print 'Buzz' for numbers divisible by 5
 * Print 'FizzBuzz' for numbers divisible by 5 and 3
 * 
 * @param {number} num 
 */
const fizzbuzz = num =>  {
	const nb = Number(num);
	
	// checking for NaN
	if(nb === nb){
		for(var idx = 1; idx <= nb; idx++){
			// place fizzbuzz conditional on top because only one condition executed
			// divisible by 3 and 5, same as divisible by 15
			if(idx % 15 === 0) console.log('FizzBuzz');
			else if (idx % 3 === 0) console.log('Fizz');
			else if (idx % 5 === 0) console.log('Buzz');
			else console.log(idx);
		}
	} else console.log('Please enter a valid number');
}

fizzbuzz(process.argv[2] || 30);
