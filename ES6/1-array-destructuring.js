
// 디스트럭쳐링: 구조 분해 할당
const names = ['홍길동', '김철수', '김뽀비', '이뚜뚜','핑핑이']

// 배열에 들어있는 데이터를 다시 각각의 변수에 저장하고 싶음.
const [a, b, c, d, e] = [...names]
console.log(a)
console.log('==============================')

// 나는 0번 인덱스랑 2번만 추출하고 싶어 다른거는 안해
const [zero, ,two,] = [...names]
console.log(zero)
console.log(two)
console.log('==============================')


const [numbers, greet] = [[10,20], ()=> console.log('hoony')]
greet()
console.log('==============================')

// swap
let first = 10, second = 20;
[first, second] = [second, first]
console.log(first, second)
console.log('==============================')

// 맨 앞 2개의 숫자만 각각의 변수에 저장하고
// 나머지 4개의 숫자는 다시한번 배열로 묶고 싶다.
const nums = [1,3,5,7,9,11];

const [aa, bb, ...others] = [...nums];
console.log(others)
