export const Query = {
  users: async (_, __, { prisma }) => {
    return prisma.user.findMany();
  },
};

export const Mutation = {
  createUser: async (_, { name, email, role }, { prisma }) => {
    return prisma.user.create({
      data: { name, email, role },
    });
  },
};
