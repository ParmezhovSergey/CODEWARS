// Создайте функцию, которая принимает целое 
// число в качестве аргумента и возвращает значение "Even"для четных или "Odd"нечетных чисел.

function even_or_odd(number) {
    if(number%2===0){
      return 'Even';
    } else {
      return 'Odd';
    }
  }