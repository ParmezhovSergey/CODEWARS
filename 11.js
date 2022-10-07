//Создайте функцию с двумя аргументами, которая будет возвращать массив первых nкратных x.

function countBy(x, n) {
    let z = [];
  for(let i=1; i<=n; i++){
    z.push(x*i)
  }
    return z;
  }