function a(){
    let b = 0;
    console.log(b);
}

// 関数スコープ外だからエラー吐くよ。
// console.log(b);

a();

{
    let c = 3;
    console.log(c);
    var d = 3;
    console.log(d);
    function e(){
        console.log('e is called');
    }

    const f  =function(){
        console.log('f is called');
    }
    
}

// ブロック外だからエラー吐くよ。
// console.log(c);

// ブロック外だけどvarだとエラー吐かないよ。
console.log(d);

// 関数宣言だから外で呼んでもエラー吐かないよ。
e();

// 関数式だから外で呼ぶとエラー吐くよ
// f();