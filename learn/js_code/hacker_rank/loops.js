// 分别输出yuanyin字母和fuyin字母

function vowelsAndConsonants(s) {
   const Reg1 = /([aieou])/g;
   const Reg2 = /([bcdfghjklmnpqrstvwxyz])/g;
   const find1 = str.match(Reg1);
   const find2 = str.match(Reg2);
    const all = find1.concat(find2);
    for(var i = 0;i<all.length;i++){
        console.log(all[i]);
    }    
}
var str='javascript';
console.log(vowelsAndConsonants(str));
