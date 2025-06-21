
let petList = ['멍멍이', '야옹이','짹쩩이'];

// push() : 배열의 맨 끝에 데이터 추가 (한번에 여러개 추가 가능)

petList.push('거북이');
petList.push('어흥이', '비둘기', '닭다리');
console.log(petList);
console.log(petList.length);

// pop() : 배열의 맨 끝에 데이터 삭제 (삭제된 데이터 변수에 저장 가능)

petList.pop();
petList.pop();
petList.pop();
let x = petList.pop();
console.log(x)
console.log(petList);

// shift() : 배열의 맨 첫번째 데이터 삭제 (삭제된 데이터 변수에 저장 가능)
// unshift() : 배열의 맨 첫번째 위치에 데이터 추가 (한번에 여러개 추가 가능)

petList.unshift('뻘뻘이','토깽이');
console.log(petList);
petList.shift();
const y = petList.shift();
console.log(y)
console.log(petList);


