'use strict';

const number = process.argv[2] || 0;
// Default command line argument: from '2'.
// 0: node.js path, 1: program file path to run
// ' || 0 ' は、明示的にコマンドライン引数を入力しなかった際のデフォルトの値が0という意味。
// 論理和'||'は、先に左のオペランドから見て、truthyであれば、その値を結果として使う。
// falsy: 数値としての0や、null、undefinedなどであれば、その右側のオペランドの値を結果として使う、という特性がある。

let sum = 0;
for (let i = 0; i <= number; i++){
    sum = sum + i;
}

console.log(sum);