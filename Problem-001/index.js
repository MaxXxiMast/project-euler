// get the sum of multiples of 3 & 5 under 1000
function getSumOfMultiples(z){
	var sum = 0;
	for (var i = 3; i <= z-1; i++){
		sum += (i%3==0 || i%5==0) ? i : 0;
	}
	return sum;
}

getSumOfMultiples(1000);
// >233168