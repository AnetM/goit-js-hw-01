const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const checkPassword = prompt("Enter your password");

if (checkPassword === ADMIN_PASSWORD) {
    message = "Добро пожаловать!"
    alert(message);
} else if (checkPassword === null) {
    message = 'Отменено пользователем!';
    alert(message);
} else {
   message = 'Доступ запрещен, неверный пароль!';
   alert(message);
}
