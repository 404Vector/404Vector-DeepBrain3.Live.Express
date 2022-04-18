exports.bmi = (payload) => {
    const {name, height, weight} = payload // 계산에 필요한 실제 값
    //Obtain user inputs
    let _height=Number(height);
    let _heightMeter = _height / 100; // cm 단위 입력이므로 m로 변경
    let _weight=Number(weight);

    //Perform calculation
    let bmi = _weight/Math.pow(_heightMeter,2);

    let output = Math.round(bmi*100)/100;
    var result = {name, height, weight}
    console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
    console.log(`bmi : ${output}`)
    if (output<18.5)
        result.bmi = "저체중";
    if (output>=18.5 && output<=25)
        result.bmi = "정상";
    if (output>=25 && output<=30)
        result.bmi = "과체중";
    if (output>30)
        result.bmi = "경도비만";
        console.log(`계산끝난 값들 : ${JSON.stringify(result)}`)
    return result
}