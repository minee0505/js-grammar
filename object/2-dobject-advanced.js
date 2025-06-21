// 커뮤니티 게시판 게시글
let article1 = {
    title: '요새 재밌는 영화 추천좀...',
    content: '요즘에 재밌는 영화를 보고 싶은데 찾기가 어렵네요',
    writer: {
        name: '잔망루피',
        account: 'loopy1234',
        joinDate: '2020-11-30',
        grade: 'GOLD',
        emailVerify: true
    },
    viewCount: 14,
    likeCount: 3,
    dislikeCount: 30,
    regDate: '2025-06-02',
    hashTags: ['질문', '취미']
};

// 객체 프로퍼티값 수정
article1.title = '제목없음!'
article1.writer.grade = 'vip'
article1.hashTags.splice(1,0,'뻘글');
console.log(article1)

/*
for (let i = 0; i < article1.hashTags.length; i++) {
    console.log(article1.hashTags[i])
}*/

for (const hashTag of article1.hashTags) {
    console.log(hashTag)
}

// 프로퍼티 동적 추가
let person = {
    name: '김철수',
    age: 30,
}

person.name = '박영희'; // 수정

person.bloodType = 'AB'; // 추가

console.log(person)

// 프로퍼티 동적 삭제
delete person.age;

// 프로퍼티 키 존재 유무 확인
console.log('name' in person); // true 키 반드시 따옴표 안에
console.log('age' in person); // false


//객체의 중첩구조
//예시 : 게시판
let articles = {
    totalCount: 25578, //총 게시물 수
    admin: 'abc1234', //게시판 관리자 아이디
    page: 2558, //총 페이지 수
    articleList: [
        // 게시물 목록
        {
            bno: 3, //글번호
            title: '가위바위보', //글제목
            writer: '김짱껨뽀', //작성자
            content: '다덤벼 ^^', //글내용
            viewCount: 53, //조회수
            recomm: 10, //추천수
            regDate: '21-12-07', //작성일자
        },
        {
            bno: 2, //글번호
            title: '노는게', //글제목
            writer: '뽀로로', //작성자
            content: '제일조와~~~', //글내용
            viewCount: 253, //조회수
            recomm: 11, //추천수
            regDate: '21-12-06', //작성일자
        },
        {
            bno: 1, //글번호
            title: '아멘', //글제목
            writer: '개신교신자', //작성자
            content: '할렐루야', //글내용
            viewCount: 23, //조회수
            recomm: 5, //추천수
            regDate: '21-12-05', //작성일자
        },
    ],
};

console.log(articles.articleList[0])

// 모든 게시물의 작성자 이름만 싹 뽑아봐라

/*
for (let writer = 0; writer < articles.articleList.length; writer++) {
    console.log(articles.articleList[writer].writer)
}*/

// console.log(articles.articleList.writer)
// 위처럼 배열안에 있는 객체의 프로퍼티에 접근하려면 .만으로 불가
// 아래처럼 배열안의 객체를 따로 뽑은 다음에 .으로 접근
for (const article of articles.articleList) {
    console.log(article.writer)
}

// 모든 게시물 데이터에서 작성자 이름과 글 제목을 조합한 새 객체를 뽑아라
/*
const newObj = {};
for (const article of articles.articleList) {
    newObj.writer = article.writer;
    newObj.title = article.title;
    console.log(newObj)
}*/

for (const article of articles.articleList) {
    let obj = {
        writer: article.writer,
        title: article.title,
    }
    console.log(obj)
}
