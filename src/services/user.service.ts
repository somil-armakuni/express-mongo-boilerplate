import prisma from "../config/prisma-client"; // Import Prisma client for DB interaction

interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export const userService = {
  async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async createUser(userData: User) {
    return prisma.user.create({
      data: userData,
    });
  },

  async updateUser(id: string, userData: Partial<User>) {
    return prisma.user.update({
      where: { id },
      data: userData,
    });
  },

  async deleteUser(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  },
};
