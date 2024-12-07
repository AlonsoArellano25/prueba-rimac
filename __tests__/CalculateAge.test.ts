import { calculateAge } from "../src/utils/functions";

//Prueba de utilidad
describe("calculateAge", () => {
  it("debería calcular correctamente la edad a partir de la fecha de nacimiento", () => {
    const birthDate = new Date("1990-04-02");
    const result = calculateAge(birthDate);
    expect(result).toBe(34);
  });

  it("debería devolver 0 para un recién nacido", () => {
    const birthDate = new Date();
    const result = calculateAge(birthDate);
    expect(result).toBe(0);
  });
});
