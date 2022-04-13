var obj = {
    name: "Carrot",
    _for: "Max",//'for' 是保留字之一，使用'_for'代替
    details: {
        color: "orange",
        size: 12
    }
}
console.log(obj.details.color,obj.details.size)