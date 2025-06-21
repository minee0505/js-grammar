//result 에는 56이 리턴되어야 함.
function min2(left, right) {
    if (left > right) {
        return right;
    } else  {
        return left;
    }
}

let result1 = min2(134, 56);
console.log(`result1: ${result1}`);

// 셋중에 가장 작은 수 50이 result에 저장되어야 함.
function min3(one, two, three) {
    if (one < two && one < three) {
        return one;
    } else if (two < one && two < three) {
        return two;
    } else {
        return three;
    }
}

let result2 = min3(120, 99, 50);
console.log(`result2: ${result2}`);

// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true 리턴, 홀수를 전달하면 false 리턴,
// 단, 0은 짝수취급

function isEven(num) {
    // return (num % 2 === 0) ? true : false;
    return num % 2 === 0;
}

let result3 = isEven(24);
console.log(`result3: ${result3}`);


// result4에는 -1000이 저장되어야 함.
function min(...numbers) {
    if (numbers.length <= 0) {
        return null;
    }
    if (numbers.length === 1) {
        return numbers[0];
    }
    let min = numbers[0];
    for (let i = 1; i <numbers.length ; i++) {
        if (numbers[i]<min){
            min = numbers[i];
        }
    }
    return min;
}

let result4 = min(9, 76, -90, -1000, 555, 780);
console.log(`result4: ${result4}`);