"use strict";
let value; // string or number가 들어올 수 있음.
value = "hello";
value = 123;
// value = true; // type error
// 함수를 union type으로 해보자.------------------------------
function printLength(value) {
    // value가 문자열 -> 문자열의 개수 출력
    // 데이터 타입 확인 : typeof 대상
    if (typeof value === "string") {
        // type guard - 다른 타입이 들어오는 것을 분기처리 하는 테크닉, narrowing(타입을 좁히는 테크닉)
        console.log(value.length);
    }
    else {
        console.log(value.toFixed(2)); // 소수점 두자리까지만 출력
    }
}
printLength("hello"); // 5
printLength(3.141595); // 3.14
// 클래스 가드--------------------------------
// 클래스 생성 -> 클래스는 설계도. 인스턴스는 실제 물건. 즉 만들어진 객체를 말한다.
// class 클래스명 { 초기값 , 함수...}
class Dog {
    bark() {
        return console.log("멍멍");
    }
}
class Cat {
    meow() {
        return console.log("야옹");
    }
}
// let 변수명 = new 클래스명() -> 이때 변수명을 인스턴스라고 부른다. 즉, 클래스가 실행되고, 그 결과를 인스턴스 라고 부른다.
// class도 type대신 사용할 수 있다.
// 인스턴스의 type을 확인하는 것이 instanceof이다.
function speak(animal) {
    if (animal instanceof Dog) {
        return animal.bark();
    }
    else {
        return animal.meow();
    }
}
const dog = new Dog(); // 인스턴스
speak(dog);
const cat = new Cat(); // 인스턴스
// function isFish(매개변수):animal is Fish{} - 함수의 결과가 true면 animal은 Fish false면 bird
function isFish(animal) {
    return animal.swim !== undefined; // 만약 animal이 fish라면(가정) swim이 있고 이게 true면 undefined는 false 이니 결국 결과는 true
}
function move(animal) {
    if (isFish(animal)) {
        animal.swim();
    }
    else {
        animal.fly();
    }
}
const myFish = {
    swim: () => console.log("물고기가 헤엄친다."),
};
const myBird = {
    fly: () => console.log("새가 날아간다."),
};
move(myFish); // 물고기가 헤엄친다.
move(myBird); // 새가 날아간다.
