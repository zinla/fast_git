let obj ={
    name:'Alan',
    last_name:function(params) {
        let last_name = function () {
            console.log(`${this.name} last_name ${params} `);
            console.log(arguments);
        }
        last_name.call(this,'age','23');  //change this to obj.name and add para type of string
    }

}

obj.last_name('Andry');
console.log(obj);
