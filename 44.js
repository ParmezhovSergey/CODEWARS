// Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов 
// с одним пробелом между ними.

// На выходе должны быть две заглавные буквы с точкой, разделяющей их.

function abbrevName(name){
    const newArray = name.split(" ")
    return (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
 }