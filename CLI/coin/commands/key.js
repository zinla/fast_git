const inquirer = require('inquirer')
const colors = require('colors');
const key_maneager = require('../lib/keyManeager')
const {isRequired} = require('../utils/validation')

const key = {
    async set(){
        const Key_Maneager = new key_maneager();
        const input = await inquirer.prompt([
            {
                type:"input",
                name:"key",
                massage:"Enter your key".green + "htts://nomic.com",
                validate:isRequired
            }
        ]);
        const key = Key_Maneager.setKey(input.key);

        if(key){
            console.log("API key set".blue);
        }

    },
    show(){
        try {
            const Key_Maneager = new key_maneager();
            const key = Key_Maneager.getKey();
            console.log("Current API key:",key.yellow);
        } catch (error) {
            console.error(err.massage.red);
        }
    },
    remove(){
          try {
            const Key_Maneager = new key_maneager();
            Key_Maneager.deleteKey();
            console.log("Current key removed ".blue);
            return;
        } catch (error) {
            console.error(err.massage.red);
        }
    }

}

module.exports = key;