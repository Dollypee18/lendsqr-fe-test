import { describe, it, expect, beforeEach } from "vitest";
import { saveToStorage, getFromStorage, removeFromStorage } from "./storage";

describe("Storage Utils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("saveToStorage", () => {
    it("should save data to localStorage", () => {
      const data = { name: "Test User", age: 25 };
      saveToStorage("user", data);
      const stored = localStorage.getItem("user");
      expect(stored).toBe(JSON.stringify(data));
    });

    it("should handle primitive types", () => {
      saveToStorage("isAuth", true);
      expect(localStorage.getItem("isAuth")).toBe("true");
    });
  });

  describe("getFromStorage", () => {
    it("should retrieve data from localStorage", () => {
      const data = { name: "Test User" };
      localStorage.setItem("user", JSON.stringify(data));
      const retrieved = getFromStorage<typeof data>("user");
      expect(retrieved).toEqual(data);
    });

    it("should return null for non-existent keys", () => {
      const retrieved = getFromStorage("nonexistent");
      expect(retrieved).toBeNull();
    });

    it("should handle invalid JSON gracefully", () => {
      localStorage.setItem("invalid", "not json");
      const retrieved = getFromStorage("invalid");
      expect(retrieved).toBeNull();
    });
  });

  describe("removeFromStorage", () => {
    it("should remove data from localStorage", () => {
      localStorage.setItem("test", "value");
      removeFromStorage("test");
      expect(localStorage.getItem("test")).toBeNull();
    });
  });
});
