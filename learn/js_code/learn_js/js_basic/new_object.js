function Waffle() {
    if (!(this instanceof Waffle)) {
        return new Waffle();
    }
    this.tastes = "yummy";
}
Waffle.prototype.wantAnother = true;
// 测试
var first = new Waffle(),
    second = Waffle();
console.log(first.tastes); // "yummy"
console.log(second.tastes); // "yummy"
console.log(first.wantAnother); // true
console.log(second.wantAnother); // true