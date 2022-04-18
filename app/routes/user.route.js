const { signup, userlist, profile } = require('../controllers/user.controller');

module.exports = x => {
    console.log(' ### user.route 로 들어옴 ###')
    x.app.post(`${x.url}/signup`, signup);
    x.app.get(`${x.url}/list`, userlist);
}


