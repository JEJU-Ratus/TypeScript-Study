import myGreet, { version as myVer } from "./lib/greeter";
import { add, Calculator, sub } from "./lib/math";
import { Utils } from "./namespace";

console.log(add(3, 4));
console.log(sub(3, 4));

const calc = new Calculator();
console.log(calc.add(5));
console.log(calc.value());

myGreet("홍길동");

console.log(myVer);

const v1 = Utils.clamp(5, 0, 10);
const v2 = Utils.Str.capitalize("typescript"); // 이제는 표준이 아님.
