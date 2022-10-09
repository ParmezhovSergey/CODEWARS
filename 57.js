// Напишите программу, которая находит сумму всех чисел от 1 до num.
//  Число всегда будет положительным целым числом больше 0.

var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};
