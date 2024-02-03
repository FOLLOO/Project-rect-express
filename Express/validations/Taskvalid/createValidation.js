import { body } from "express-validator";

import moment from "moment";

export const createValidation = [
  body('title', 'Напшиште заголовок задачи').notEmpty().trim().isLength({min: 2}),

  body('description', 'Напишите текст').isLength({ min: 2}),

  body('dateEnd', 'Укажите дату окончания')
  .custom((value, { req }) => {
    if (!value || !moment(value, 'YYYY-MM-DD', true).isValid()) {
      throw new Error('Укажите действительную дату окончания в формате YYYY-MM-DD');
    }
    if (moment(value).isBefore(moment(), 'day')) {
      throw new Error('Дата окончания не может быть ранее текущей даты');
    }
    return true;
  }),
];