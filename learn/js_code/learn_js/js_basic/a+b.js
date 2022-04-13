
// function sum(a, b) {
//     if (a == 0) return b
//     if (b == 0) return a
//     let newA = a ^ b
//     let newB = (a & b) << 1
//     return sum(newA, newB)
// } //ES5

let sum = (a, b) => {
    if (a == 0) return b
    if (b == 0) return a
    let newA = a ^ b
    let newB = (a & b) << 1
    return sum(newA, newB)
} //ES6
console.log(sum(8,8));
