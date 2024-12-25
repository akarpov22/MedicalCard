import { PrismaClient } from '@prisma/client';
import { prescriptionValidationSchema } from '../validation';

export function createPrescriptionManager(prisma: PrismaClient) {
  return {
    findAllPrescriptions: async () => {
      return prisma.prescription.findMany({ include: { user: true } });
    },
    createPrescription: async (data: { userId: number; medication: string; dosage: string; duration: string }) => {
      await prescriptionValidationSchema.validate(data);
      return prisma.prescription.create({ data });
    },
    updatePrescription: async (id: number, data: Partial<{ medication: string; dosage: string; duration: string }>) => {
      return prisma.prescription.update({ where: { id }, data });
    },
    deletePrescription: async (id: number) => {
      return prisma.prescription.delete({ where: { id } });
    },
  };
}
