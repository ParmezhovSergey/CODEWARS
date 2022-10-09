// Напишите функцию с именем setAlarm, которая получает два параметра. Первый параметр, used ,
// истинен, когда вы работаете, а второй параметр, Vacation истинен, когда вы находитесь в отпуске.

// Функция должна возвращать true, если вы работаете, а не в отпуске (поскольку это обстоятельства,
//     при которых вам нужно установить будильник). В противном случае он должен возвращать false. Примеры:

function setAlarm(employed, vacation) {
  if (employed == true && vacation == true) {
    return false;
  } else if (employed == false && vacation == true) {
    return false;
  } else if (employed == false && vacation == false) {
    return false;
  } else if (employed == true && vacation == false) {
    return true;
  }
}
