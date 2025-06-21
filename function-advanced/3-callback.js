
/*
    일급 함수
    : 함수를 마치 하나의 값처럼 보는 개념

    -> 함수를 다른 함수의 매개값으로 넘기는게 가능
    -> 함수가 함수를 리턴하는 것도 가능
*/

/*
function foo(param) {
    param(); // 콜백: 함수한테 함수를 주고 전달받은 함수를 나중에 호출
}

foo(function () {
    console.log('메롱')
})*/

function foo(define) {
    define();
}
foo(function () {
    console.log('노는게 제일 조하')
    console.log('뽀롱뽀롱')
    console.log('ㅋㅋㅋㅋ 멀 웃엉')
})

// 편지지 양식 함수
function makePaper(receiver, sender, content){
    console.log(`수신인: ${receiver}`)
    console.log(`====================`)
    // 이 사이에 편지 내용을 쓰세요
    content();


    console.log(`====================`)
    console.log(`발신인: ${sender}`)
}

makePaper('hoony', 'mini', ()=>{
    console.log('같이 행복해지자!')
    console.log('항상 고마워~')
    console.log('사랑해ㅎㅎ')
})