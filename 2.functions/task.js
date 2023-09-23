function getArrayParams(...arr) {
	let min = arr[0];
	let max = min;
	let sum = 0;
	let avg = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];

		if (arr[i] <= min) {
			min = arr[i];
		} else if (arr[i] >= max) {
			max = arr[i];
		}
	}
	avg = sum / arr.length;
	avg = +avg.toFixed(2);

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function getArrayParams(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let avg = (arr.reduce((sum, current) => sum + current, 0)) / arr.length;
	avg = +avg.toFixed(2);
	return {
		min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let result = arr.reduce((sum, current) => sum + current, 0);
		return result;
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let max = Math.max(...arr);
		let min = Math.min(...arr);
		return max - min;
	}
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let sumEvenElement = 0;
		let sumOddElement = 0;
		let checkEvenOdd = 0;
		for (let i = 0; i < arr.length; i++) {
			checkEvenOdd = arr[i] % 2;
			if (checkEvenOdd === 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
		return (sumEvenElement - sumOddElement)
	}
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		let sumEvenElement = 0;
		let countEvenElement = 0;
		let checkEven = 0;
		for (let i = 0; i < arr.length; i++) {
			checkEven = arr[i] % 2;
			if (checkEven === 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			} else {
				continue;
			}
		}
		return (sumEvenElement / countEvenElement);
	}
}


const arr = [
	[10, 10, 11, 20, 10],
	[67, 10, 2, 39, 88],
	[72, 75, 51, 87, 43],
	[30, 41, 55, 96, 62]
];

function makeWork(arrOfArr, func) {
	let maxWorkerResult = arrOfArr[0][0];
	for (i = 0; i < arrOfArr.length; i++) {
		resultFunc = func(...arrOfArr[i]);
		if (resultFunc > maxWorkerResult) {
			maxWorkerResult = resultFunc;
		}
	}
	return maxWorkerResult;
}