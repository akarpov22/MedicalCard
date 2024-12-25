import { PrismaClient } from '@prisma/client';
import { clinicValidationSchema } from '../validation';

export function createClinicManager(prisma: PrismaClient) {
  return {
    findAllClinics: async () => {
      return prisma.clinic.findMany();
    },
    createClinic: async (data: { name: string; address: string; contact: string }) => {
      await clinicValidationSchema.validate(data);
      return prisma.clinic.create({ data });
    },
    updateClinic: async (id: number, data: Partial<{ name: string; address: string; contact: string }>) => {
      return prisma.clinic.update({ where: { id }, data });
    },
    deleteClinic: async (id: number) => {
      return prisma.clinic.delete({ where: { id } });
    },
  };
}
