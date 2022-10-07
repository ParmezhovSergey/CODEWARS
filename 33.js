// Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте.
//  Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).

function countSheeps(arrayOfSheep) {
  let counter = 0;
  arrayOfSheep.forEach((sheep) => {
    if (sheep) counter++;
  });
  return counter;
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
  var num = 0;
  for (var i = 0; i < arrayOfSheep.length; i++)
    if (arrayOfSheep[i] == true) num++;

  return num;
}
