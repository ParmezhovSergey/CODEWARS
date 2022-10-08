// Создайте функцию, которая выдает персонализированное приветствие. 
// Эта функция принимает два параметра: nameи owner.

function greet (name, owner) {
    if (name===owner){
      return 'Hello boss'
    } else {
      return 'Hello guest'
    }
  }