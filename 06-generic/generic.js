// 미리 지정하지 않고 함수를 실행할 때 타입 지정. <T> :T
function identity(value) {
    return value;
}
const result1 = identity("hello"); // 타입 선언 및 값 입력
const result2 = identity(123); // 타입 선언 및 값 입력
console.log(result1);
console.log(result2);
// 타입 명시
function wrap(value) {
    return [value];
}
const numArr = wrap(123);
console.log(numArr);
export {};
