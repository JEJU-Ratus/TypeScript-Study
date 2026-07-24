"use strict";
const user1 = {
    id: 1,
    name: "홍길동",
};
const user2 = {
    id: 2,
    name: "이도령",
    age: 25,
};
user1.name = "성춘향"; // 이상 없이 값이 바뀜.
// user1.id = 10; // 읽기 전용을 수정하려고 하니 오류 발생.
console.log(user1);
