// Problem Statement
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function checkPalindrome(int){
	if(typeof(int) === 'number'){
		var reverseInt = parseInt(int.toString().split('').reverse().join(''));
		if(int === reverseInt){
			return true;
		} else {
			return false;
		}
	} else {
		console.log('Please enter a number. You have entered a '+ typeof(int) +' value.')
	}
}

function largestPalindrome(){
	for(var i = 999; i >= 100; i--){
		for( var j; j >= 100; j--){
			if(checkPalindrome(i*j)){
				return i*j;
			}
		}
	}
}

largestPalindrome();
// >>580085
