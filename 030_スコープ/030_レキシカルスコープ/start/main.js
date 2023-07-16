let a = 0;
function b(){
    let c = 3;
    console.log(c);
    function e(){

        console.log(c);
        console.log(a);
    }
    // 関数eは関数ｂの中だからエラー吐かないよ。
    e();

}
b();

// function d(){

//     console.log(c);
// }
// 関数ｄの中ではcはスコープ外だからエラー吐くよ。
// d();