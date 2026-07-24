interface User {
  readonly id: number; // 읽기 전용
  name: string;
  age?: number; // 필수가 아닌 값도 가능하게 하기 : 변수에 ? 붙이면 됌.
}

const user1: User = {
  id: 1,
  name: "홍길동",
};
const user2: User = {
  id: 2,
  name: "이도령",
  age: 25,
};

user1.name = "성춘향"; // 이상 없이 값이 바뀜.
// user1.id = 10; // 읽기 전용을 수정하려고 하니 오류 발생.

console.log(user1);

// interface 확장(extend)

interface Person1 {
  name: string;
}

// 수동으로 하면 다음과 같다.
// 위의 객체에서 EmployeeId: number; 만 추가됨.
interface Employee1 {
  name: string;
  EmployeeId: number;
}

// 확장 예시
interface Person2 {
  name: string;
}

interface Employee2 extends Person2 {
  EmployeeId: number;
}

const emp: Employee2 = {
  name: "철수",
  EmployeeId: 101,
};

// interface 병합
interface Profile {
  id: number;
  name: string;
}
interface Profile {
  age?: number;
}
// 이렇게 같은 이름으로 사용하면 자동으로 병합된다.

const profile: Profile = { id: 1, name: "길동", age: 30 };
