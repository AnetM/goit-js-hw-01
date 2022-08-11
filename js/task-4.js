const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
let enterNumber = prompt("Сколько дроидов Вы хотите купить?");


totalPrice = enterNumber * pricePerDroid;
 
if (totalPrice > credits) {
    alert("Недостаточно средств на счету!");
} else if (enterNumber === null) {
    alert('Отменено пользователем!');
}
else {
    alert(`'Вы купили ${enterNumber} дроидов, на счету осталось ${credits - totalPrice} кредитов.'`)
}