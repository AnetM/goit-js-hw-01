// // const enterNumber = prompt("Введите число!");
// let input = prompt("Введите число!");
// let total = 0;
// input = Number(input);
// // total += input;
// // console.log(input);
// // console.log(total);


// if (input !== NaN) {
//     total += input;
//     console.log(total);
//     input = prompt("Введите число!");
// } else if (Number(input) === NaN) {
//     alert(`Было введено не число, попробуйте еще раз`);
// }
// else {
//     alert(`Общая сумма чисел равна ${total}`);
// }


function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length < maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + '...';
  }

  /// Change code above this line

  return result;
}

console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41))


