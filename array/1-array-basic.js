
let numbers = [10, 20, 30, 40, 50, 60];

// 배열의 길이 체크
console.log(numbers.length)

// 인덱스 범위: 0 ~ N-1
// 배열의 마지막 데이터 접근
console.log(numbers[numbers.length-1])

// 배열의 순회: 전체 데이터에 일일히 모두 접근

// 전통적인 반복문 순회법 (인덱스 제어 가능)
for (let i = 0; i < numbers.length; i++) {
    console.log(`${i+1}번째 요소: ${numbers[i]}`);
}

// 배열 전용 반복문 for ~ of (인덱스 제어 불가, 모두 소비할 때)
for (let n of numbers) {
    console.log(`n: ${n}`);
}
