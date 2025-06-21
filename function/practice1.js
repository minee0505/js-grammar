/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아
2. bmi지수를 계산하여 반환함과 동시에
3. bmi가 25.0이상이면 "당신은 과체중입니다."
  18.5이하면 "당신은 저체중입니다."
  나머지는 "당신은 정상체중입니다."를 출력하는
  CalcBMI라는 함수를 정의하고 호출하세요.
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m))
# 출력 예시:
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

Math.round(5.78999); // 반올림 -> 6
*/
/*let h = 178.4,
    w = 78.2;*/

// ==== 키, 몸무게 입력 함수 ==== //
function userInfo(height, weight) {
    // 객체 리터럴 따로 변수에 담지 발고 바로 리턴
    return {
        height: height,
        weight: weight,
    }
}

const user = userInfo(167, 64.2);

// ==== BMI 입력 함수 ==== //
function calcBMI (cm, kg, digit) {
    let userBMI = kg / ((cm/100) * (cm/100))
    userBMI = Math.round(userBMI * (10 ** digit)) / 10 ** digit
    return userBMI
}

const userBMI = calcBMI(user.height, user.weight, 2)

// === BMI 판정 및 사용자에게 알려주는 함수 === //
function BMIJudge(userBMI) {
    if (userBMI>= 25) {
        console.log('당신은 과체중입니다.')
        console.log(`키=> ${user.height}, 몸무게 => ${user.weight}, BMI => ${userBMI}`)
    } else if (userBMI <= 18) {
        console.log('당산은 저체중입니다.')
        console.log(`키=> ${user.height}, 몸무게 => ${user.weight}, BMI => ${userBMI}`)
    } else {
        console.log('당신은 정상체중입니다.')
        console.log(`키=> ${user.height}, 몸무게 => ${user.weight}, BMI => ${userBMI}`)
    }
}
BMIJudge(userBMI);

/*

// let myBmi = calcBMI(h, w);

function judgeBmi(myBmi) {
    if (myBmi>= 25) {
        console.log('당신은 과체중입니다.')
    } else if (myBmi <= 18) {
        console.log('당산은 저체중입니다.')
    } else {
        console.log('당신은 정상체중입니다.')
    }
}

judgeBmi(calcBMI(168,68))


function round(bmi, num) {
    /!*
    3.7684 -> 3.8
    -> 3.7684 * 10 => 37.684 => 반올림 38 => / 10 => 3.8
    // return Math.round(bmi * (10 ** num)) / (10 ** num)

    3.7684 -> 3.77
    -> 3.7684 * 100 => 376.84 => 반올림 377 => / 100 => 3.77
    // return Math.round(bmi *100) / 100
     *!/
    return Math.round(bmi * (10 ** num)) / (10 ** num)
}*/

// console.log(  `키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(calcBMI(168,68), 2)}입니다.`)

