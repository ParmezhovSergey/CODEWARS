// У всех животных праздник! Каждое животное приносит одно блюдо. Есть только одно правило:
//блюдо должно начинаться и заканчиваться теми же буквами, что и имя животного. Например,
//большая голубая цапля приносит чесночный наан, а синица приносит шоколадный торт.

// Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов и
//возвращает true или false, чтобы указать, разрешено ли животному принести блюдо на пир.

// Предположим, что beastи dishвсегда строчные строки, и каждая из них состоит как минимум
//из двух букв. beastи dishможет содержать дефисы и пробелы, но они не будут отображаться
//в начале или конце строки. Они не будут содержать цифр.

function feast(beast, dish) {
  return beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
    ? true
    : false;
}