// Дан список целых чисел, определить, является ли сумма его элементов четной или нечетной.

// Дайте ответ в виде сопоставления строк "odd"или "even".

function oddOrEven(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++)
    {result+=array[i];}
    if (result%2 == 0)
    {return "even";}
    else{return "odd";}
  }