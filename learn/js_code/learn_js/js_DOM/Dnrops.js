//通过ID选择DOM元素
function id(id){
    return document.querySelector('#'+id);
}
//选择同一个类名的第一个
function first_cl(cl) {
    return document.querySelector('.'+cl);
    
}
//选择同一个类名的所有class
function all_cl(cl){
    return document.querySelectorAll('.'+cl);
}
//通过tag name获取dom
function tag(tag){
    return document.getElementsByTagName(tag);
}
//通过name属性获取dom
function get_name(name) {
return document.getElementsByName(name);    
}
