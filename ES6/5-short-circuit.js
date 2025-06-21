

/*
    단축 평가 (short circuit): 논리연산시 좌항에서 결과가 결정될 경우
       우항의 연산을 무시
 */

// && 연산자는 좌항이 false면 값이 항상 false이기에 우항을 무시
true && true;   // t
true && false;  // f
false && true;  // f
false && false; // f

// || 연산자는 좌항이 true면 값이 항상 true이기에 우항을 무시
true || true;   // t
true || false;  // t
false || true;  // t
false || false; // f


let a = 10, b = 20;
if (++a > 20 && ++b === 21) {
// 좌항이 false니까 우항 무시 a= 11, b= 20
}
console.log(`a: ${a}, b: ${b}`);

console.log('===================');

// truthy falsy(0, '', undefined, null, NaN)
// 논리가 아닌데 논리연산이 가능
console.log('hello' && null); //  true && false -> null
console.log(0 && '메롱');     //  false && true -> 0

console.log('===================');

console.log('hello' || undefined); // true || false  -> hello
console.log(null || 300);          // false || true  -> 300

console.log('===================');

// if (isLogin) {
//   '<h2>회원님 반갑습니다.</h2>';
// }
//
// isLogin && '<h2>회원님 반갑습니다.</h2>';

function foo(param) {
    console.log(`param: ${param || '없음!'}`);
}

foo();







