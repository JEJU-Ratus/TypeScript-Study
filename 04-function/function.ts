// function 함수명():type{} - type은 리턴값의 type을 고정해주는 것이다.
function add(a: number, b: number): number {
  return a + b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function subtract(a: number, b: number): number {
  return a - b;
}

// const result = add('10','20') // type 오류
const result = add(10, 20); // 30

// 그런데 위의 함수를 잘 보면
// function subtract(a: number, b: number): number {} 가 공통적으로 반복된다. - type으로 지정을 해주자

type MathOperation = (c: number, d: number) => number; // 화살표 함수. 속성값도,return 값도 number라고 선언
// 위 함수들을 MathOperation을 이용해서 만들기

const add1: MathOperation = (a, b) => a + b;
const mul1: MathOperation = (a, b) => a * b;
const sub1: MathOperation = (a, b) => a - b;
const divide: MathOperation = (a, b) => a / b;
