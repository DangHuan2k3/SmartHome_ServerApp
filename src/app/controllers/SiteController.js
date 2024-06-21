const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] /
    async home(req, res, next) {
        console.log('cron_now');
        res.send('Yêu em Na nhứt nhứt trên đờiiiii <3 <3 <3');
    }
}


module.exports = new SiteController; // Tạo một instance cho SiteController
//const SiteController = require('./SiteController');