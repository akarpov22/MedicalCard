import { PrismaClient } from '@prisma/client';
import { reviewValidationSchema } from '../validation';

export function createReviewManager(prisma: PrismaClient) {
  return {
    findAllReviews: async () => {
      return prisma.review.findMany({ include: { patient: true, doctor: true } });
    },
    createReview: async (data: { patientId: number; doctorId: number; comment: string; rating: number }) => {
      await reviewValidationSchema.validate(data);
      return prisma.review.create({ data });
    },
    updateReview: async (id: number, data: Partial<{ comment: string; rating: number }>) => {
      return prisma.review.update({ where: { id }, data });
    },
    deleteReview: async (id: number) => {
      return prisma.review.delete({ where: { id } });
    },
  };
}
