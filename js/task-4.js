const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
let enterNumber = prompt("Сколько дроидов Вы хотите купить?");


 
if (totalPrice > credits) {
    alert("Недостаточно средств на счету!");
} else if (enterNumber === null) {
    alert('Отменено пользователем!');
}

// const checkPassword = prompt("Enter your password");

// if (checkPassword === ADMIN_PASSWORD) {
//     message = "Добро пожаловать!"
//     alert(message);
// } else if (checkPassword === null) {
//     message = 'Отменено пользователем!';
//     alert(message);
// } else {
//    message = 'Доступ запрещен, неверный пароль!';
//    alert(message);
// }