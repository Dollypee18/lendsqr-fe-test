import { describe, it, expect } from "vitest";
import { getUsers, getUserById, getStats } from "./mockApi";

describe("Mock API", () => {
  describe("getUsers", () => {
    it("should return 500 users", () => {
      const users = getUsers();
      expect(users).toHaveLength(500);
    });

    it("should return users with required fields", () => {
      const users = getUsers();
      const user = users[0];
      expect(user).toHaveProperty("id");
      expect(user).toHaveProperty("username");
      expect(user).toHaveProperty("email");
      expect(user).toHaveProperty("phoneNumber");
      expect(user).toHaveProperty("status");
    });

    it("should return users with valid status", () => {
      const users = getUsers();
      const validStatuses = ["Active", "Inactive", "Pending", "Blacklisted"];
      users.forEach((user) => {
        expect(validStatuses).toContain(user.status);
      });
    });

    it("should cache users on subsequent calls", () => {
      const users1 = getUsers();
      const users2 = getUsers();
      expect(users1).toBe(users2);
    });
  });

  describe("getUserById", () => {
    it("should return user with matching id", () => {
      const user = getUserById("1");
      expect(user).toBeDefined();
      expect(user?.id).toBe("1");
    });

    it("should return undefined for non-existent id", () => {
      const user = getUserById("9999");
      expect(user).toBeUndefined();
    });
  });

  describe("getStats", () => {
    it("should return stats object with correct structure", () => {
      const stats = getStats();
      expect(stats).toHaveProperty("users");
      expect(stats).toHaveProperty("activeUsers");
      expect(stats).toHaveProperty("usersWithLoans");
      expect(stats).toHaveProperty("usersWithSavings");
    });

    it("should return correct total users count", () => {
      const stats = getStats();
      expect(stats.users).toBe(500);
    });

    it("should have active users less than or equal to total users", () => {
      const stats = getStats();
      expect(stats.activeUsers).toBeLessThanOrEqual(stats.users);
    });
  });
});
