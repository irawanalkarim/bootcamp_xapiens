let sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.";

	sentence = sentence.toLowerCase();
	let noOfCountsOfEachCharacter = {};
	let getCharacter, counter, actualLength, noOfCount;

	for (counter = 0, actualLength = sentence.length; counter < actualLength; ++counter) {
	   getCharacter = sentence.charAt(counter);
	   noOfCount = noOfCountsOfEachCharacter[getCharacter];
	   noOfCountsOfEachCharacter[getCharacter] = noOfCount ? noOfCount + 1: 1;
	}

	for (getCharacter in noOfCountsOfEachCharacter) {
	   if(getCharacter!=' ')
	   console.log("Karakter "+getCharacter + " sebanyak " + noOfCountsOfEachCharacter[getCharacter] +" kali");
	}
