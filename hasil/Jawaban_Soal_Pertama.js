function pecahAngka(num) {
	let digits = [];
	let cnt = 0;
	while (num > 0) {
	    let mod = num % 10;
	    digits.push(mod * Math.pow(10, cnt));

	    num = Math.floor(num / 10);
	    cnt++;
	}
	digits.reverse();
	digits.forEach(function(e) {
		console.log(e);
	});
}

pecahAngka(1234567);