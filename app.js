// 変数
let hello = "Hello World";
alert(hello);

// 文字列の結合
alert('Hello' + 'World');

// 変数＋文字列の結合
let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);

// 条件分岐
let orange = 100;
let apple = 120;

if(orange < apple){
    alert('みかんの値段がリンゴより安い');
} else if(orange == apple){
    alert('みかんとリンゴが同じ値段');
} else{
    alert('みかんの値段がリンゴより高い');
}

// 繰り返し処理：while文
let max = 100;
let num = 1;
let count = 0;

while(num < max){
    num = num * 2;
    count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// 繰り返し処理：for文
let i;
let numb = 0;

for(i = 1; i < 11; i++){
    numb = numb + i;
}

alert('1から10まで足した結果は' + numb + 'です');
