// Даны два целых числа aи b, которые могут быть положительными или отрицательными,
// найдите сумму всех целых чисел между ними и включая их и верните ее.
//  Если два числа равны, верните aили b.

function getSum(a, b) {
  if (a == b) return a;
  let sum = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  for (i = min; i <= max; i++) sum += i;
  return sum;
}
