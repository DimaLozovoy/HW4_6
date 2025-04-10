export function AverageNum(array) {
  let a = 0;
  let averageNum;
  for (const element of array) {
    a += element;
    averageNum = a / array.length;
  }
  if (averageNum < 100 && averageNum > 90) {
    console.log("your marks is S");
  } else if (averageNum < 90 && averageNum > 75) {
    console.log("your marks is A");
  } else if (averageNum < 75 && averageNum > 50) {
    console.log("your marks is B");
  } else {
    console.log("your marks is bad");
  }
  // console.log(averageNum);
}
