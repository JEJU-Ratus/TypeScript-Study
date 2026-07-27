// 모듈시스템 도입 전의 TS 방식
// 키워드로 함수,타입을 하나로 정의(묶어준다.)
// namespace 안에 namespace 정의할 수 있다.
export namespace Utils {
  //clamp = 특정 범위를 지정할 때 사용하는 값
  export function clamp(n: number, min: number, max: number) {
    return Math.min(min, Math.min(n, max));
  }
  export namespace Str {
    export function capitalize(s: string) {
      return s.length ? s[0].toUpperCase() + s.slice(1) : s;
    }
  }
}

const v1 = Utils.clamp(120, 0, 100);
const v2 = Utils.clamp(-5, 0, 100);
const v3 = Utils.Str.capitalize("typescript");
