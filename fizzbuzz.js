const fizzbuzz = num =>  {
	for(var i = 0; i <= num; i++){
		// place fizzbuzz conditional on top because only one condition executed
		// divisible by 3 and 5, same as divisible by 15
		if(i % 15 === 0) console.log('FizzBuzz');
		else if (i % 3 === 0) console.log('Fizz');
		else if (i % 5 === 0) console.log('Buzz');
                else console.log(i);
	}
}

fizzbuzz(process.argv[2]);
