import { PrismaClient } from '@prisma/client';
import { medicalRecordValidationSchema } from '../validation';

export function createMedicalRecordManager(prisma: PrismaClient) {
  return {
    findAllMedicalRecords: async () => {
      return prisma.medicalRecord.findMany({ include: { user: true } });
    },
    createMedicalRecord: async (data: { userId: number; diagnosis: string }) => {
      await medicalRecordValidationSchema.validate(data);
      return prisma.medicalRecord.create({ data });
    },
    updateMedicalRecord: async (id: number, data: Partial<{ diagnosis: string }>) => {
      return prisma.medicalRecord.update({ where: { id }, data });
    },
    deleteMedicalRecord: async (id: number) => {
      return prisma.medicalRecord.delete({ where: { id } });
    },
  };
}
