import { getPlans } from "../src/services/getPlansService";
import API from "../src/services/api";

//Prueba de Servicio
jest.mock("../src/services/api", () => ({
  get: jest.fn()
}));

describe("getPlans", () => {
  const originalConsoleError = console.error;

  beforeAll(() => {
    console.error = jest.fn();
  });

  afterAll(() => {
    console.error = originalConsoleError;
  });

  it("debería retornar una lista de planes cuando la API responde correctamente", async () => {
    const mockPlans = {
      list: [
        {
          name: "Plan en Casa",
          price: 39,
          description: ["Detalle 1", "Detalle 2"],
          age: 25
        }
      ]
    };

    (API.get as jest.Mock).mockResolvedValue({ data: mockPlans });

    const result = await getPlans();
    expect(result).toEqual(mockPlans.list);
  });

  it("debería manejar errores de la API", async () => {
    (API.get as jest.Mock).mockRejectedValue(new Error("API Error"));

    await expect(getPlans()).rejects.toThrow("API Error");
  });
});
