//Учитывая строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.



function doubleChar(str) {
    var newString = "";
    for( i = 0; i < str.length; i++) {
      newString += str[i] + str[i];
    }
    return newString;
  }