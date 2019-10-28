import React, { Component } from 'react';


class ArrowFunction extends Component {
  render() {

    console.log('ARROWFUNCTION');
    // function
    let sayHi = function () {
      console.log('hi-function');
    }
    sayHi();
    // Arrow Function
    let sayHello = () => {
      console.log('hi-arrowfunction');
    }
    sayHello();


    //truyền 1 tham số
    let greeting = function (name) {
      console.log(`Hello, my name is ${name}`);
    }
    greeting("Lam");


    // arrown function có thể bỏ dấu ngoặc khi truyền 1 tham số và cú pháp ngắn gọn hơn function
    let GREETING = name => {
      console.log(`hello, my name is ${name}`);
    }
    GREETING("Lam");

    // function

    let double = function (x) {
      return x * 2;
    }
    console.log(double(1));

    // arrow function có thể bỏ qa từ khóa return và bỏ dấu ngoặc nhọn nếu chỉ có 1 câu lệnh

    let DOUBLE = x => x * 2
    console.log(DOUBLE(1));

    // ví dụ sử dụng hàm map 

    // function 
    let arr = [1, 2, 3, 4];

    let square1 = arr.map(function (e) {
      return e * e;
    });
    console.log(square1);

    let ARRS = [1, 2, 3, 4];
    let square = ARRS.map((e, index) => {
      console.log(e); // e sẽ nhận từng giá trị trong mảng ARRS 
      return e * e;
    });
    console.log(square);


    // Arrow function không bind this

    // function
    var x = 0;

    function DelayPrint(x, timeout) {
      this.x = x;
      let self = this;

      setTimeout(function print() {
        console.log(`The value is ${self.x}.`);
      }, timeout);
    }

    let p = new DelayPrint(1, 1000);

    // arrow function

    var x = 0;

    function DelayPrint(x, timeout) {
      this.x = x;
      let self = this;

      setTimeout(function print() {
        console.log(`The value is ${self.x}.`);
      }, timeout);
    }

    let P = new DelayPrint(1, 1000);

    // Arrow function không được hoisted

    let myFunc1 = () => { }
    myFunc1(); // OK

    // myFunc2(); // => ReferenceError: myFunc2 is not defined
    // let myFunc2 = () => { }
    return (
      <div>
        <h1>ArrowFunction & Function</h1>
      </div>
    );
  }
}

export default ArrowFunction;