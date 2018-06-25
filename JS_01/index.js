'use strict';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
let no = 'Отменено пользователем!'
let noNo = 'Доступ запрещен'

let admin = prompt('Напишите логин');
if (!admin) {
  alert(no)
} else if (admin !== ADMIN_LOGIN) {
  alert(noNo)
} else if (admin === ADMIN_LOGIN) {


  let password = prompt('Напишите пароль');
  if (!password) {
    alert(no)
  } else if (password !== ADMIN_PASSWORD) {
    alert(noNo)
  } else if (password === ADMIN_PASSWORD) {
    alert('Добро пожаловать!')
  }
}
