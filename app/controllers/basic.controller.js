const { bmi } = require('../services/basic.service');

exports.getBmi = (req, res) =>{
    // body : 보안을 위해 추가 값이 있음, 따라서 헤더를 버리고 실제 필요 값만을 취함, payload 참조
    const {name, height, weight} = req.body 
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`이름 : ${name}`)
    console.log(`키 : ${height}`)
    console.log(`몸무게 : ${weight}`)
    const json = bmi({name, height, weight})
    console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
    res.status(200).json(json)
  }

  