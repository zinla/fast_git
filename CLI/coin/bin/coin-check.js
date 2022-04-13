const program = require('commander');
const check = require('../commands/check')

program
    .command('price')
    .description('check price coins')
    .option('--coin <type> ','Add specific coin type in csv format','BTC,ETH,XRP')
    .option('--cur <currency> ','change the currency','USD')
    .action((cmd)=>check.price(cmd));

program.parse(process.argv);