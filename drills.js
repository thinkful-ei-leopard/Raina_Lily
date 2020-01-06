'use strict';

function repeat(fn, n){
  for (let i = 1; i <= n; i++) {
    fn(i);
  }
}

function hello(){
    console.log('Hello World');
}

function goodbye(){
    console.log('goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);