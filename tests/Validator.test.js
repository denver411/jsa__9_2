import Validator from '../src/js/Validator';

test('Имя с пробелом в начале не проходит проверку', () => {
  const validator = new Validator();

  expect(validator.validateUsername(' name')).toBeFalsy();
});

test('Имя с пробелом в конце не проходит проверку', () => {
  const validator = new Validator();

  expect(validator.validateUsername('name ')).toBeFalsy();
});

test('Имя с недопустимыми символами не проходит проверку', () => {
  const validator = new Validator();

  expect(validator.validateUsername('name?')).toBeFalsy();
});

test('Имя с двумя и более пробелами подряд не проходит проверку', () => {
  const validator = new Validator();

  expect(validator.validateUsername('na  me')).toBeFalsy();
});

test('Имя проходит проверку', () => {
  const validator = new Validator();

  expect(validator.validateUsername('name')).toBeTruthy();
  expect(validator.validateUsername('name 1234')).toBeTruthy();
  expect(validator.validateUsername('name-56')).toBeTruthy();
});
