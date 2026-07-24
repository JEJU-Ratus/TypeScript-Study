"use strict";
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`hello, ${this.name}`);
    }
}
const person1 = new Person("hong");
const person2 = new Person("Lee");
class User {
    id;
    nickname;
    // constructor(public id:number,private nickname:string){}
    constructor(id, 
    // private nickname: string,
    nickname) {
        this.id = id;
        this.nickname = nickname;
        this.id = id;
        this.nickname = nickname;
    }
    intro() {
        return `USER#${this.id} / nickname은 ${this.nickname}이다.`;
    }
    getNickname() {
        return this.nickname;
    }
}
const u = new User(1, "rock");
console.log(u.intro()); // USER#1 / nickname은 rock이다.
// console.log(u.nickname); // private이라 밖에서 못씀.
console.log(u.id); // public이라 밖에서 쓸 수 있음.
console.log(u.getNickname()); // 내부 함수니 닉네임이 나옴
// 확장 - 등급 포함
class Admin extends User {
    level;
    constructor(id, nickname, level) {
        super(id, nickname); // super() 부모 클래스에서 속성을 가져올 수 있다.
        this.level = level;
    }
    showId() {
        return this.id;
    }
    showNickname() {
        return this.nickname; // 닉네임은 private 라서 못쓴다.
    }
}
const admin = new Admin(2, "admin", 10);
console.log(admin.showNickname());
