a();
function a(){
    // 先に呼ぶとエラー
    // console.log(c);
    // d先に呼んでもOK
    d();
    function d(){
        console.log('d is called');
    }
    let c = 0;
    console.log('a is called');
}
// 先に呼ぶとエラー
// console.log(c);
// console.log(b);
var b = 1;
const c = 2;
console.log(b);
// console.log(c);