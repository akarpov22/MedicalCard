import { PrismaClient } from '@prisma/client';

type Context = {
  prisma: PrismaClient;
};

export const Query = {
  users: async (_: unknown, __: unknown, { prisma }: Context) => {
    return prisma.user.findMany();
  },
};

export const Mutation = {
  createUser: async (
    _: unknown,
    args: { name: string; email: string; role: string },
    { prisma }: Context
  ) => {
    const { name, email, role } = args;
    return prisma.user.create({
      data: { name, email, role },
    });
  },
};