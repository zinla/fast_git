const configstore = require('configstore');
const pkg = require('../package.json');

class key_maneager{
    constructor(){
        this.conf = new configstore(pkg.name);
    }
    setKey(key){
        this.conf.set('apiKey',key);
        return key;
    }
    getKey(){
        const key = this.conf.get('apiKey');
        if (!key) {
            throw new Error('no api key found -Get API key from https://nomics.com');
        }
        return key;
    }
     deleteKey(){
        const key = this.conf.get('apiKey');
        if (!key) {
            throw new Error('no api key found -Get API key from https://nomics.com');
        }
        this.conf.delete('apiKey');
        
        return;
    }


}
module.exports = key_maneager;