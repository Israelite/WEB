// // 1)
// var x = 5;
// alert( x++ ); // OK
//
// // 2)
// var a = 1;
// var res = --a + a--;
// alert(res); // ERROR
// alert(a); // ERROR
//
// // 3)
// alert( null >= 0 );  //
// alert( null > 0 ); 	 //
// alert( null == 0 );  //
//
// // 4)
// alert( undefined > 0 );  //
// alert( undefined == 0 ); //
// alert( undefined < 0 );  //
//
// // 5)
// function changeValue(value) {
//     value = 'In';
//     alert(value); // ???
// }
// var value = "Out";
// changeValue(value);
// alert(value); // ???
//
// // 6)
// function changeValue(a, b) {
//     console.log('!');
//     console.log(a);
//     console.log(b);
// }
//
// var a = 1;
// var b = 2;
//
// changeValue(,a); // ???
//
// // 7)
// var res = (1,5 - 1) * 2;
// console.log(res); // 8
//
// // 8)
// function f() {};
// console.log(f); // function f() {}
// if (f) {
//     console.log(typeof f); // function
// }
//
// // 9)
// if (function f() {}) {
//     console.log(typeof f); // ???
// }
//
// // 10)
// a = [1, 2, 3];
// b = [1, 2, 3];
// console.log(a == b); // ???
//
//
//
// // 11)
// console.log(2 && 1 && null && 0 && undefined); // ???
//
//
//
// // 12)
// var obj = {
//     "0": 1,
//     "0": 2
// };
//
// alert( obj["0"] + obj["0"] );
//
//
//
//
//
//
//
//
//
//
//
