
var gameBoard = document.getElementById('game-board');

var x = 'X';
var o = 'O';
var next = x;

gameBoard.onclick = function (event) {
    var target = event.target;
    if (target.tagName !== 'TD' || target.innerHTML) {
        return;
    }
    target.innerHTML = next;
    next = next === x ? o : x;
};


// target.innerHTML = возвращает содержимое тега в виде текста