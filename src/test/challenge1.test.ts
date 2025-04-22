import { calculate } from "../challenge1";

describe("Challenge 1 Tests", () => {
  describe("Addition", () => {
    it("should return the correct sum for positive numbers", () => {
      const result = calculate({ operation: "add", numbers: [1, 2, 3] });
      expect(result).toBe(6);
    });

    it("should return the correct sum for negative numbers", () => {
      const result = calculate({ operation: "add", numbers: [-1, -2, -3] });
      expect(result).toBe(-6);
    });

    it("should throw an error if no numbers are provided", () => {
      expect(() => calculate({ operation: "subtract", numbers: [] })).toThrow("No numbers provided.");
    });
  });

  describe("Subtraction", () => {
    it("should return the correct difference for positive numbers", () => {
      const result = calculate({ operation: "subtract", numbers: [10, 2, 3] });
      expect(result).toBe(5);
    });

    it("should return the correct difference for negative numbers", () => {
      const result = calculate({
        operation: "subtract",
        numbers: [-10, -2, -3],
      });
      expect(result).toBe(-5);
    });

    it("should throw an error if no numbers are provided", () => {
      expect(() => calculate({ operation: "subtract", numbers: [] })).toThrow("No numbers provided.");
    });
  });

  describe("Multiplication", () => {
    it("should return the correct product for positive numbers", () => {
      const result = calculate({ operation: "multiply", numbers: [2, 3, 4] });
      expect(result).toBe(24);
    });

    it("should return the correct product for negative numbers", () => {
      const result = calculate({
        operation: "multiply",
        numbers: [-2, -3, -4],
      });
      expect(result).toBe(-24);
    });

    it("should throw an error if no numbers are provided", () => {
      expect(() => calculate({ operation: "subtract", numbers: [] })).toThrow("No numbers provided.");
    });
  });

  describe("Division", () => {
    it("should return the correct quotient for positive numbers", () => {
      const result = calculate({ operation: "divide", numbers: [20, 2, 2] });
      expect(result).toBe(5);
    });

    it("should return the correct quotient for negative numbers", () => {
      const result = calculate({ operation: "divide", numbers: [-20, -2, -2] });
      expect(result).toBe(-5);
    });

    it("should throw an error if no numbers are provided", () => {
      expect(() => calculate({ operation: "divide", numbers: [] })).toThrow("No numbers provided.");
    });
  });

  describe("Invalid Operation", () => {
    it("should throw an error for an invalid operation", () => {
      expect(() => calculate({ operation: "invalid", numbers: [1, 2, 3] } as any)).toThrow("Invalid operation");
    });
  });
});
