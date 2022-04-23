import db from '../models/index.js'
import getDatabase from '../lambdas/getDatabase.js'

export default function UserService(){
    //my content
    const User = db.User
    const dbo = getDatabase()
    const dbConnect = dbo.getDb()
    return {
            join(req, res){
                new User(req.body).save(function(err){
                    if(err){
                        res.status(500).json({message: err})
                        console.log('회원가입 실패')
                        return; // 매우 중요, 없으면 next로 다음으로 넘어가짐
                    }else{
                        res.status(200).json({ok: 'ok'})
                    }
                })
                //Todo
                res.status(200).json({}) // 리턴값
            },
            login(req, res){
                const data = req.body
                res.status(200).json({})
            }
    }
}