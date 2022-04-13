function drawIt(){
    var i=0;
    console.log(i);
}
function eatIt(){
    var i=1;
    console.log(i);
}
var action="draw";

switch(action) {
    case 'draw':
        drawIt();
        break;
    case 'eat':
        eatIt();
        break;
    default:
        doNothing();
}