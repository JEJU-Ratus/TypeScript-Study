// 객체를 정의할 때 나만의 타입을 만들기 위해 interface를 썼었는데 - 객체를 사용.

// type은 다음처럼 나만의 타입을 만든다.
// 객체 뿐만 아니라 어떤것도 나만의 타입을 만들 수 있다.
type Point = {
  x: number;
  y: number;
};
const p1: Point = { x: 10, y: 20 };

// type의 특징
// 별칭을 만들고 확장가능

type Point3D = Point & { z: number }; // Point 객체type의 속성 + z 추가한 객체를 생성
const p2: Point3D = { x: 10, y: 20, z: 30 };

// 튜플(tuple) - 배열을 만들 때 (개념.)
// 기존 : let arr = [1,2,3] / arr = ['1','2','3'] 과같이 동작 해도 괜찮음. 타입이 정해져 있지 않기 때문에
// 튜플의 경우 값의 길이도 지정한다. 그리고 안의 타입도 여러개를 각각 지정할 수 있다.

// 일반 배열
let arr: string[] = ["a", "b", "c"];

// 튜플 개념 사용
// 길이는 2. 0번은 문자열 1번은 숫자
// 형태의 이름이 없어서 불편할 수 있음. -> 튜플 형태를 type으로 지정해주기.
let tuple: [string, number] = ["길동", 30];
// tuple = [30,'길동']; // 오류 발생. 타입 에러

type UserInfo = [number, string, boolean]; // tuple형태의 type
const userA: UserInfo = [1, "길동", true];
const userB: UserInfo = [2, "순자", false];
