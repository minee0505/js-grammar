const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbies: ['수영', '축구', '테니스'],
    },
    {
        account: 'banana',
        userName: '빠나나왕',
        job: '과일',
        address: '서울',
        hobbies: ['푸드파이팅', '테니스'],
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbies: ['족구', '축구', '테니스', '영화감상'],
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbies: ['독서', '테니스'],
    },
];


// 회원목록에서 회원의 직업들만 모두 추출해서 새 배열로 리턴
// [ '추노', '과일', '발렛파킹', '게이머' ]
/*
const filter = function () {
    const filteredArray = [];
    for (const user of userList) {
        filteredArray.push(user.job)
    }
    return filteredArray;
}
console.log(filter())*/

// mapping - 원본 데이터 셋에서 특정 데이터들만 추출하는 기법
const mapByUser = function (callback){
    const mappedArray = [];
    for (const user of userList) {
        const item = callback(user);
        mappedArray.push(item)
    }
    return mappedArray;
}

const map1 = mapByUser(user => `${user.userName}님`);
console.log(map1)
console.log('==========================================')

// 회원들의 첫번째 취미만 추출해줘
const map2 = mapByUser(user => user.hobbies[0])
console.log(map2)
console.log('==========================================')

// 회원들의 이름과 주소만 추출해서 객체로 묶은 다음 새배열로 리턴!
const map3 = mapByUser(user => newObj = {
    이름: user.userName,
    주소: user.address,
})
console.log(map3)
console.log('==========================================')

// 아무 목록에서 특정 데이터만 추출해서 새배열로 줘!
const map = function (array, callback){
    const mappedArray = [];
    for (const element of array) {
        const item = callback(element);
        mappedArray.push(item)
    }
    return mappedArray;
}

const numbers = [1,2,3,4,5,6,7,8,9];
const names = ['홍길동', '김철수', '김뽀비','이뚜뚜','핑핑이']

const map4 = map(numbers, num => num ** 2);
console.log(map4)
console.log('==========================================')

const map5 = map(names, name=> name.slice(0,1))
console.log(map5)
