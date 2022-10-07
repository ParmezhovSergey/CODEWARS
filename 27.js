// Напишите функцию, которая проверяет, имеют ли два заданных символа один и тот же регистр.

// Если какой-либо из символов не является буквой, вернуть-1
// Если оба символа имеют одинаковый регистр, верните1
// Если оба символа являются буквами, но в разных регистрах, вернуть0

function sameCase(a, b){
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
     }else{
       return 0
     }
   }