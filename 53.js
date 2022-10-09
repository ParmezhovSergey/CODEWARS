// Вы были в походе с друзьями далеко от дома, но когда пришло время возвращаться, вы понимаете,
// что топливо на исходе, а ближайшая заправка 50далеко! Вы знаете, что в среднем ваш автомобиль
// расходует около 25миль на галлон. Остаются 2галлоны.

// Учитывая эти факторы, напишите функцию, которая говорит вам, можно ли добраться до насоса или нет.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump <= mpg * fuelLeft) {
    return true;
  } else {
    return false;
  }
};
