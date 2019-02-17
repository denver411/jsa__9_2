/**
*  Класс для валидации данных
*
*/

class Validator {
  constructor() {
    this.isValid = false;
  }

  /**
  *  Метод валидации имени
  *
  * @param {string} name - Имя персонажа
  *
  * Имя не должно содержать более нескольких пробелов подряд,
  * а также начинаться и заканчиваться пробелами.
  * Допустимы только буквы, пробелы и символы тире.
  *
  */

  validateUsername(name) {
    const tempStr = name.match(/^[a-zа-я0-9-]+[a-zа-я0-9 -]*[a-zа-я0-9-]+$/i);

    this.isValid = tempStr ? !/ {2,}/g.test(tempStr[0]) : false;

    return this.isValid;
  }
}

export default Validator;
