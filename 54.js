// Таракан – одно из самых быстрых насекомых. Напишите функцию,
//  которая получает скорость в км/ч и возвращает ее в см/с с
//  округлением в меньшую сторону до целого числа (= с точностью до пола).

function cockroachSpeed(s) {
  return Math.floor(s * (250 / 9));
}
