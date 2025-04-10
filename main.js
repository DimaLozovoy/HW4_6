import { Multiply, Add } from "./modules/math";
import { Average, betterMath } from "./modules/betterMath";
import { Random } from "./modules/randomNum";
import { AverageNum } from "./modules/marks";
import { Page } from "./modules/someHtmlStuff";

Multiply(5, 4);
Add(77, 33);
const b = [1, 2, 3, 4, 5, 6, 7, 8];
Average(b);
console.log(Random(10, 0));
const abc = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
AverageNum(abc);
Page(
  "IM TITLE!!!",
  "IM BUTTON!!!",
  "https://www.google.com/imgres?q=cats&imgurl=https%3A%2F%2Fwww.cats.org.uk%2Fmedia%2F13139%2F220325case013.jpg&imgrefurl=https%3A%2F%2Fwww.cats.org.uk%2Fcats-blog%2F9-things-to-know-before-getting-your-first-cat&docid=BJaHVuqp-vSSnM&tbnid=KJJtoL7e6aITTM&vet=12ahUKEwiI7s_zgbqMAxXhBNsEHQThC9QQM3oECFoQAA..i&w=8192&h=5464&hcb=2&ved=2ahUKEwiI7s_zgbqMAxXhBNsEHQThC9QQM3oECFoQAA"
);
