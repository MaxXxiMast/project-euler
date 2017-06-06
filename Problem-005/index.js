// Problem Statement
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
function leastCommonMultiple(a, b){
	function range(a, b){
		var arr = [],
			x   = Math.min(a,b),
			y   = Math.max(a,b)

		for (var i = x; i <= y; i++){
			arr.push(i);
		}
		return arr;
	}

	function gcd(a,b){
		return !b ? a : gcd(b, a % b);
	}

	function lcm(a,b){
		return (a*b)/gcd(a,b);
	}

	return range(a,b).reduce(lcm);
}

leastCommonMultiple(1,20);
// >>232792560