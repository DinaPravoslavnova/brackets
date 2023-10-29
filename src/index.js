module.exports = function check(str, bracketsConfig) {
  const openBrackets = []; // объявление массива openBrackets, который будет содержать открывающие скобки
  const bracketsPair = {}; // объявление объекта bracketsConfig, который будет содержать ключ и значение

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]); // заполнение массива openBrackets первыми элементами подмассивов из массива config
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0]; // заполнение объекта bracketsConfig элементами подмассивов из массива config, где ключ это открывающая скобка, а зачение - закрывающая скобка
  }

  const stack = []; // объявление стека

  for (let i = 0; i < str.length; i++) {
    let current = str[i]; // текущий элемент проверяемой строки
    let topElement = stack[stack.length - 1]; // последний элемент стека

    if (openBrackets.includes(current)) {
      if ((topElement === current) && (bracketsPair[current] === current)) { // проверка условия, если последний элемент стека равен текущему и одинаковы ли открывающая и закрывающая скобки? (совпадает ли текущий элемент проверяемой строки со своей парой)
        stack.pop(); // извлечение последнего элемента стека
      } else {
        stack.push(current); // добавление текущего элемента в стек
      }
    } else {
      if (stack.length === 0) { // если стек пустой
        return false;
      }
      if (bracketsPair[current] === topElement) { // если закрывающая скобка равна последнему элементу стека
        stack.pop();
      } else {
        return false;
      }
    }
  }
  
  return stack.length === 0;
};
