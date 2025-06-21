
// n개의 파라미터를 전달할 경우
function addAll(numbers = []) {
    console.log(numbers);
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

const r1 = addAll([10,20,30,40,50]);
console.log(r1)


// ES6+ : 자바스크립트 최신 문법
// spread : 너 배열 나열에서 던지면 내가 이거 내부적으로 배열로 묶어서 처리할게
//          너는 배열로 던지지마
function addAllES6(...numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
}
// const r2 = addAllES6([10,20,30]); // 출력: 010,20,30
const r2 = addAllES6(10,20,30); // 출력: 60
console.log(r2)
