// 이름 내보내기 방식
export const add = (a: number, b: number) => a + b;
export const sub = (a: number, b: number) => a - b;

//기본 내보내기
export class Calculator {
  constructor(private init = 0) {}
  add(n: number) {
    this.init += n;
    return this.init;
  }
  value() {
    return this.init;
  }
}
