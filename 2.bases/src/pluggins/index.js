const {setId} = require('../pluggins/get-id.plugin');
const {getAge} = require('../pluggins/get-age.plugin');
const { http } = require('../pluggins/http-client.plugin');
const buildLogger = require('../pluggins/winston.plugin'); 


module.exports = {
    setId,
    getAge,
    http,
    buildLogger,
    
        
}