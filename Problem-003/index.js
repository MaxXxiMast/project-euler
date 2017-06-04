// Problem Statement
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(number, divisor=2){
	while(number % divisor == 0 && Math.pow(divisor, 2) <= number){
		divisor++
	}
	return (Math.pow(divisor, 2) <= number) ? largestPrimeFactor(number/divisor, divisor) : number;
}

largestPrimeFactor(600851475143);
// >>6857