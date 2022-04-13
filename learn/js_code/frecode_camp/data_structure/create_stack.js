const { function } = require("joi");
const { delete } = require("vue/types/umd");

// Craetes a stack
var Alen_Stack = function () {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.kittx = function (value) {
        this.storage[this.count] = value;
        this.count++;
        
    }
    this.yuyux = function(){
        if(this.count ===0){
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
}