import { PrismaClient } from '@prisma/client';
import { userValidationSchema } from '../validation';

export function createUserManager(prisma: PrismaClient) {
  return {
    findAllUsers: async () => {
      return prisma.user.findMany({
        include: {
          appointments: true,
          medicalRecords: true,
          prescriptions: true,
          reviewsWritten: true,
          reviewsReceived: true,
        },
      });
    },
    createUser: async (data: { name: string; email: string; role: string }) => {
      await userValidationSchema.validate(data);
      return prisma.user.create({ data });
    },
    updateUser: async (id: number, data: Partial<{ name: string; email: string; role: string }>) => {
      return prisma.user.update({ where: { id }, data });
    },
    deleteUser: async (id: number) => {
      return prisma.user.delete({ where: { id } });
    },
  };
}
