import ErrorRepository from "../ErrorRepository";

const CarErrors = new ErrorRepository();

test("Ошибка 17888 - success", () => {
  expect(CarErrors.translate(17888)).toBe('оптический датчик магнитной ленты');
});

test("Ошибка 23241 - success", () => {
  expect(CarErrors.translate(23241)).toBe("высокая температура печатных голов");
});

test("Ошибка 17038 - success", () => {
  expect(CarErrors.translate(17038)).toBe("ошибка драйвера XYZ");
});
