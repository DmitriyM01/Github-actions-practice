import { test, expect } from "@jest/globals";
import sum from "../src/index.js";

test('test_ONE', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum('', 4)).toBe("Введите корректные значения")
});
