// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
// Функция должна возвращать true, если можно построить треугольник со сторонами заданной длины,
// и false в любом другом случае.

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
