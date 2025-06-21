
const student = {
    age: 5,
    stuName: '뽀로로',
    birthDay: '2020-01-01',
};

const {age, stuName: name, birthDay: birth} = {...student}

console.log(`학생의 이름은 ${name}이고, 나이는 ${age}살이고, 생일은 ${birth}입니다.`);
console.log('==============================')

const divStyle = {
    'font-size': '16px',
    'border-radius': '50%'
};

const {'font-size': fontSize, 'border-radius': radius} = {...divStyle}
console.log(fontSize);
console.log(radius);

// 디스트럭쳐링을 파라미터에서 바로 진행
const myPetInfo = ({name, age}) => {
    // const { name, age } = myPet;

    console.log(`우리 애완동물의 이름은 ${name}입니다.`);
    console.log(`우리 애완동물의 나이는 ${age}살입니다.`);
};

const cat = {
    name: '나비',
    age: 7,
    kind: '러시안블루',
    injection: true
};

myPetInfo({
    name: '초코',
    age: 3
});

const {kind, injection, ...basicInfo} = cat;

console.log(basicInfo);
