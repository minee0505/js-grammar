
let foods = ['닭꼬치', '볶음밥', '족발', '파스타'];

// indexOf() : 배열의 특정 요소가 몇번 인덱스에 있는지 알려줌. (존재하지 않으면 -1 리턴)
const x = foods.indexOf('볶음밥');
console.log(x)

// 음식목록에서 족발을 찾아서 보쌈으로 바꿔주세요.
let y = foods.indexOf('족발')
foods[y] = '보쌈'
console.log(foods)

// includes() : 배열의 특정 요소가 있는지의 유무를 확인
let flag = foods.includes('파스타');
console.log(flag)

// 음식 목록에 파스타가 없다면~
if (foods.includes('파스타')) {}

// slice() : 배열을 원하는 만큼 분할해서 복사배열로 반환 (원본이 안변함)
let numbers = [10, 20, 30, 40, 50, 60];

let slicedNumbers = numbers.slice(1,3); // 인덱스 1번부터 3번미만까지
console.log(`slice: `, slicedNumbers)
console.log(numbers.slice(3)); // 3번부터 끝까지
console.log(numbers.slice()); // 전체복사

// splice() : 배열의 요소를 추가하거나 삭제 (중간에서 작업 가능)
// 배열의 원본을 건드림.

console.log(foods)
foods.splice(2, 1) // 2번인덱스부터 1개 삭제
console.log(foods)

foods.splice(0,1,'마라탕', '짜장면'); // 0번 인덱스 지우고 그 자리에 마라탕
console.log(foods)


