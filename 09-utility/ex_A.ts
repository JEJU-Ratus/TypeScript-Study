// 실습 A
type UserDraftA = Partial<User>;
const a1: UserDraftA = { name: '홍길동' }; // OK
const a2: UserDraftA = {};                 // OK

type UserStrictA = Required<User>;
/* 아래 객체를 UserStrictA에 맞게 완성해 보자 */
const a3 /* : UserStrictA */ = {
  id: 1,
  name: 'Kim',
  role: 'member',
  //   <- 추가 작성 email 속성의 값으로 'kim@example.com'
};

