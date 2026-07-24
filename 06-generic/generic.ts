// 미리 지정하지 않고 함수를 실행할 때 타입 지정. <T> :T
function identity<T>(value: T): T {
  return value;
}

const result1 = identity<string>("hello"); // 타입 선언 및 값 입력
const result2 = identity<number>(123); // 타입 선언 및 값 입력
console.log(result1); // hello
console.log(result2); // 123

// 타입 명시
function wrap<T>(value: T) {
  return [value];
}

const numArr = wrap<number>(123);
console.log(numArr); // [123]

// 타입 추론
const result3 = identity("hello"); // 타입 선언 안되어 있음. <타입> 안적음 - 추론하여 문자면 문자, 숫자면 숫자로 자동적으로 추측하여 적용
console.log(result3);

// 문자열
const result5 = identity<string>("hello world"); // 타입 선언 및 값 입력
// 숫자
const result6 = identity<number>(12345); // 타입 선언 및 값 입력
// boolean
const result7 = identity<boolean>(false); // 타입 선언 및 값 입력
// 배열(문자열)
const result8 = identity<string[]>(["a", "b", "c"]); // 타입 선언 및 값 입력

// 객체
interface User {
  id: number;
  name: string;
}
const userResult = identity<User>({ id: 1, name: "길동" });

export {}; // typescript에서 import나 export가 하나도 없으면 전역 스크립트로 간주가 되는 문제가 있어서 이걸 추가해주면 독립 모듈로 인정한다.
