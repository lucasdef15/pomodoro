import { describe, expect, it } from "vitest";
import formatTime from "./formatTime";

describe("formatTime", () => {
  it("should format one second correctly", () => {
    expect(formatTime(1)).toBe("00:01");
  });

  it("should format one minute correctly", () => {
    expect(formatTime(60)).toBe("01:00");
  });

  it("should format ten minutes and one second correctly", () => {
    expect(formatTime(601)).toBe("10:01");
  });
});
