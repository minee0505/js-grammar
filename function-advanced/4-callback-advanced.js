const userList = [
    {
        account: 'abc1234',
        userName: '대길이',
        job: '추노',
        address: '서울',
        hobbys: ['수영', '축구', '테니스'],
    },
    {
        account: 'banana',
        userName: '빠나나왕',
        job: '과일',
        address: '서울',
        hobbys: ['푸드파이팅', '테니스'],
    },
    {
        account: 'park1234',
        userName: '주차왕',
        job: '발렛파킹',
        address: '경기',
        hobbys: ['족구', '축구', '테니스', '영화감상'],
    },
    {
        account: 'fire',
        userName: '불꽃남자카리스마',
        job: '게이머',
        address: '서울',
        hobbys: ['독서', '테니스'],
    },
];

/*
// 회원목록에서 취미가 딱 2개인 사람들만 추려서
// 새 배열에 다시 담아주세요.
const newArray = [];
for (const user of userList) {
    if (user.hobbys.length === 2) {
        newArray.push(user)
    }
}
console.log(newArray)*/


// 회원목록에서 취미가 딱 2개인 사람들만 추려서
// 새 배열에 다시 담아서 리턴하는 함수를 정의해주세요.

const filterByHas2Hobbies = function () {
    const newArray = [];
    for (const user of userList) {
        if (user.hobbys.length === 2) {
            newArray.push(user)
        }
    }
    return newArray;
}

const r1 = filterByHas2Hobbies()
console.log(r1)
console.log('==========================================')


// 회원목록에서 서울에 거주하는 사람들만 새배열에 담아 리턴해줘
const liveInSeoul = function() {
    const newArray = [];
    for (const user of userList) {
        if (user.address === '서울') {
            newArray.push(user)
        }
    }
    return newArray
}

const r2 = liveInSeoul();
console.log(r2)
console.log('==========================================')

// 회원목록에서 특정 조건을 만족하는 회원들을 필터링해주는 함수
function filterUser(callback){
    const filterArray = [];
    for (const user of userList) {
        if (callback(user)){
            filterArray.push(user);
        }
    }
    return filterArray;
}

// 콜백을 활용한 필터링 예시
// 취미가 2개인 회원들만 필터링
// 밑의 filteruser의 콜백함수는 user의 정보를 모르기에 위에서 콜백함수를 호출할 때 user를 던져줘야 함
const filter1 = filterUser(user => user.hobbys.length === 2);
console.log(filter1)
console.log('==========================================')

// 서울에 살면서 이름에 왕이 들어간 사람
const filter2 = filterUser(user => user.address === '서울' && user.userName.includes('왕'))
console.log(filter2)
console.log('==========================================')

function filter(array, callback){
    const filterArray = [];
    for (const element of array) {
        if (callback(element)){
            filterArray.push(element);
        }
    }
    return filterArray;
}
const filter3 = filter(userList, user => user.address === '경기');
console.log(filter3)
console.log('==========================================')

const numbers = [1,2,3,4,5,6,7,8,9];

// numbers에서 홀수들만 새 배열에 다시 담아줘.
const filter4 = filter(numbers, num => num % 2 === 1)
console.log(filter4)