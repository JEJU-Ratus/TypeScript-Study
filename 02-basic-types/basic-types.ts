// 기본 타입
let age: number = 30; // 숫자
let username: string = "홍길동"; // 문자열
let isActive: boolean = true; // boolean
age = 40; // 문제 x
// age = '40'; // 문제 발생 - js에서는 정상 동작. - 타입 이슈 방지

// 배열 타입
let numbers: number[] = [1, 2, 3]; // 배열의 타입 지정(숫자)
let numbers2: Array<number> = [1, 2, 3]; // 위와 결과물이 같다. js로 치면 let arr = new Array() 에 해당

let strings: string[] = ["길동", "점례", "순자"]; // 배열의 타입 지정(문자열)
let strings2: Array<string> = ["길동", "점례", "순자"]; // 배열의 타입 지정(문자열) // generic방식

// let strings : string[] = ['길동','점례',3,4,5] // 오류 발생.

// 타입 추론
let count = 5; // count는 숫자로 간주(추론). let count: number = 5; 로 인식
// count = '5' - 그러므로 에러 발생한다.
