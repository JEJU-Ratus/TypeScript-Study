function identity<T>(value: T): T {
  return value;
}
function wrap<T>(value: T) {
  return [value];
}


/** Q1. 출력 예측하기
 *  아래 콘솔의 실행 결과를 주석으로 적어보자.
 */
const q1a = identity<string>("Hello");
const q1b = identity<number>(2025);
const q1c = identity<boolean>(true);
const q1d = identity<string[]>(["TS", "JS", "Node"]);
console.log("Q1-a:", q1a);
console.log("Q1-b:", q1b);
console.log("Q1-c:", q1c);
console.log("Q1-d:", q1d);


/** Q2. 타입 추론
 *  다음 변수들의 타입을 주석으로 적어보자.
 */
const q2a = identity(10);        // 타입은 ?
const q2b = wrap("abc");         // 타입은 ?
const q2c = wrap<number>(123);   // 타입은 ?
/* 힌트) identity(10)는 T가 무엇으로 추론되는가?
 *      wrap("abc")의 반환 타입은?
 */


/** Q3. 컴파일 오류 찾기
 *  아래 중 컴파일 오류가 나는 줄을 찾아 주석으로 표시하라.
 */
const q3a = identity<number>("123");
const q3b = identity<string[]>(["a", "b"]);
const q3c = wrap<boolean>(false);


/** Q4. 제네릭 함수 작성
 *  인자로 받은 값을 2중 배열로 감싸서 반환하는 함수 wrapTwice<T>를 작성하라.
 *  예) wrapTwice(10) -> [[10]]
 */
function wrapTwice<T>(value: T) {
  // ??? 구현
  return ???;
}
console.log("Q4:", wrapTwice(10));
/** Q5. 제약 조건 with keyof
 *  객체와 키를 받아 해당 값을 반환하는 getProp<T, K extends keyof T>를 완성하라.
 */
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  // ??? 구현 (obj에서 key에 해당하는 값을 반환)
  return ???;
}
interface User {
  id: number;
  name: string;
}
const user: User = { id: 1, name: "Kim" };
console.log("Q5:", getProp(user, "name")); // "Kim"


/** Q6. 조건부 로직 + 타입가드
 *  배열이면 길이를, 아니면 그대로 값을 반환하는 함수 toLengthOrSelf<T>를 작성하라.
 *  힌트) Array.isArray(대상) 사용
 */
function toLengthOrSelf<T>(value: T | T[]) {
  // ??? 구현
  if (???) {
    return ???; // 배열 길이
  }
  return ???;   // 원래 값
}
console.log("Q6-a:", toLengthOrSelf([1, 2, 3])); // 3
console.log("Q6-b:", toLengthOrSelf("abc"));     // "abc"


/** Q7. 제네릭 클래스
 *  타입 안전한 스택 Stack<T>를 작성하라: push, pop, size
 */
class Stack<T> {
  private buf: T[] = [];
  //값을 추가한다.
  push(item: T) {
    // ??? 구현
	this.buf.????	
  }
  //마지막 원소를 제거한다.
  pop(): T | undefined {
    // ??? 구현
    return this.buf.???;
  }
  //배열의 길이를 구한다.
  size() {
    // ??? 구현
    return ???;
  }
}
const s = new Stack<number>();
s.push(1);
s.push(2);
console.log("Q7-size:", s.size()); // 2
console.log("Q7-pop:", s.pop());   // 2
console.log("Q7-pop:", s.pop());   // 1
console.log("Q7-pop:", s.pop());   // undefined


/** Q8. 두 객체를 합치는 제네릭 merge<A, B>
 *  반환 타입은 A & B (교차 타입)이어야 한다.
 */
function merge<A extends object, B extends object>(a: A, b: B): A & B {
  // ??? 구현 (스프레드로 합치기)
  return ???;
}
const merged = merge({ id: 1 }, { name: "Kim" });
/* merged 타입은 무엇인가? 주석으로 적어보자. */
console.log("Q8:", merged);


/** Q9. O/X 퀴즈 (주석으로 답하라)
 *  1) identity 함수에서 T는 호출 시점에 명시하거나, 컴파일러가 추론할 수 있다. (O/X)
 *  2) wrap<string>(123)은 컴파일된다. (O/X)
 *  3) getProp<User, "id">(user, "name")은 타입 오류다. (O/X)
 *  4) merge의 반환 타입 A & B는 두 타입을 모두 만족하는 교차 타입이다. (O/X)
 */


/** Q10. 응용: 제네릭 기본값
 *  T의 기본 타입을 string으로 두는 함수 defaulted<T = string>(v: T): T를 선언하고,
 *  인자 없이 호출 시 T가 string으로 간주됨을 확인하라.
 */
function defaulted<T = string>(v: T): T {
  return v;
}
const q10a = defaulted("hello");  // T는 ?
const q10b = defaulted(123);      // T는 ?
console.log("Q10-a:", q10a);
console.log("Q10-b:", q10b);

export {}
