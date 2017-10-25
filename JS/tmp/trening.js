function f(a, b) {
    var s = arguments[2];
    console.log(s);
    return a * b;
}

var res = f(33, 44, 'hello');