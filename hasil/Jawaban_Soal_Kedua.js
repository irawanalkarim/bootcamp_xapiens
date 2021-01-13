function splitArrayIntoChunksOfLen(arr, len) {
  let chunks = [], i = 0, n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }
  return chunks;
}
let number=[1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3];
//tampilkan jadi 3 kelompok
let numberPairs=splitArrayIntoChunksOfLen(number,11);
console.log(numberPairs);

numberPairs.forEach(function(e) {
	console.log(e.sort(function(a, b){return b-a}));//urutan dari besar ke kecil
	
	console.log('Total : '+e.length);//total setiap elemen

	let average = (array) => array.reduce((a, b) => a + b) / array.length;
	console.log('Rata-rata : '+average(e));//rata rata setiap elemen

	function arrayMax(arr) {
	  let len = arr.length, max = -Infinity;
	  while (len--) {
	    if (arr[len] > max) {
	      max = arr[len];
	    }
	  }
	  return max;
	};
	console.log('Nilai tertinggi : '+arrayMax(e));//nilai tertinggi

	function arrayMin(arr) {
	  let len = arr.length, min = Infinity;
	  while (len--) {
	    if (arr[len] < min) {
	      min = arr[len];
	    }
	  }
	  return min;
	};
	console.log('Nilai terendah : '+arrayMin(e));//nilai terendah
});

