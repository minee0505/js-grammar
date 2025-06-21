
// 우리 집 강아지 2마리 - 초코 , 해피

let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;

// 객체
let myDog1 = {
    name: '초코',
    age: 3,
    tall: 30,
    weight: 10,
    injection: false,
    favorites: ['산책', '간식'],
}

let myDog2 = {
    name: '해피',
    age: 5,
    tall: 45,
    weight: 10,
    injection: true,
    favorites: ['꼬리 흔들기', '초코 괴롭히기'],
}

// 객체 프로퍼티 참조법
console.log(myDog1.name);
console.log(myDog2.age);

// 프로퍼티 참조법2
console.log(myDog2['name']); // 대괄호 참조법은 무조건 따옴표 넣어주기

let height = 'tall';

console.log(myDog1[height]); // 이거는 'tall'이라는 프로퍼티를 변수에 저장했기 때문에 따옴표 없이도 참조 가능
                            // 변수값으로 키를 접근하려면 대괄호 참조법 사용

let divStyle = {
    color: 'red',
    'font-size': '16px',
}

console.log(divStyle["color"]);
console.log(divStyle["font-size"]); // 자바스크립트에서는 띄어쓰기나 - 허용 안됨 무조건 대괄호 표기법 사용해야 함



