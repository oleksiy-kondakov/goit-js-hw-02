function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line

  const loginValid = login.length >= 4 && login.length <= 16;
  return loginValid;
}
//Напиши функцию isLoginValid(login),
//в которой проверь количество символов параметра login
//и верни true или false в зависимости от того,
//попадает ли длина параметра в заданный диапазон
//от 4 - х до 16 - ти символов включительно.

function isLoginUnique(allLogins, login) {
  "use strict";
  // Write code under this line
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
}

//Напиши функцию isLoginUnique(allLogins, login),
//которая принимает список всех логинов и добавляемый логин
//как параметры и проверяет наличие login в массиве allLogins,
//возвращая true если такого логина еще нет
//и false если логин уже используется.

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  if (isLoginValid(login) !== true) {
    return (message = ERROR);
  } else if (isLoginUnique(allLogins, login) === true) {
    allLogins.push(login);
    return (message = SUCCESS);
  } else {
    return (message = REFUSAL);
  }
}

//Напиши функцию addLogin(allLogins, login) которая:

//Принимает новый логин и массив всех логинов как параметры

//Проверяет валидность логина используя вспомогательную функцию isLoginValid

//Если логин не валиден, прекратить исполнение функции addLogin
//и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'

//Если логин валиден, функция addLogin проверяет уникальность логина
//с помощью функции isLoginUnique

//Если isLoginUnique вернет false,
//тогда addLogin не добавляет логин в массив
//и возвращает строку 'Такой логин уже используется!'

//Если isLoginUnique вернет true,
//addLogin добавляет новый логин в logins
//и возвращает строку 'Логин успешно добавлен!'

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
