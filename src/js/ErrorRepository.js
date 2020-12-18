export default class ErrorRepository {
  constructor(errors) {
    this.errors = new Map([
      [17888, 'оптический датчик магнитной ленты'],
      [23241, 'высокая температура печатных голов'],
      [17038, 'ошибка драйвера XYZ'],
      [41886, 'обрыв датчика уровня бака чернил'],
      [51876, 'замыкание УФ']
    ]);
  }

  translate(code) {
    if (this.errors.has(code) === true) {
      return this.errors.get(code)
    } else throw new Error('Ошибка не найдена');
  }
}

const CarErrors = new ErrorRepository();
