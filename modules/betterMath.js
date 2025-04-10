export function Average(array) {
  let a = 0;
  let averageNum;
  for (const element of array) {
    a += element;
    averageNum = a / array.length;
  }
  console.log(averageNum);
}
