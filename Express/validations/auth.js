import { body } from 'express-validator';

export const registerValidaton = [
  body('email', 'НЕвернвй формат почты').isEmail(),
  body('password', 'пароль меньше 6 символов').isLength({ min: 8}),
  body('fullName', 'Укажите Имя').isLength({ min: 2}),
  body('avatarUrl', 'неверная ссылка на аватар').optional().isURL(),
];
export const loginValidaton = [
  body('email', 'НЕвернвй формат почты').isEmail(),
  body('password', 'пароль меньше 6 символов').isLength({ min: 8}),
];