import { PrismaClient } from '@prisma/client';
import { appointmentValidationSchema } from '../validation';

export function createAppointmentManager(prisma: PrismaClient) {
  return {
    findAllAppointments: async () => {
      return prisma.appointment.findMany({ include: { user: true } });
    },
    createAppointment: async (data: { userId: number; dateTime: string; status: string }) => {
      await appointmentValidationSchema.validate(data);
      return prisma.appointment.create({
        data: { userId: data.userId, dateTime: new Date(data.dateTime), status: data.status },
      });
    },
    updateAppointment: async (id: number, data: Partial<{ dateTime: string; status: string }>) => {
      return prisma.appointment.update({
        where: { id },
        data: {
          ...(data.dateTime && { dateTime: new Date(data.dateTime) }),
          ...(data.status && { status: data.status }),
        },
      });
    },
    deleteAppointment: async (id: number) => {
      return prisma.appointment.delete({ where: { id } });
    },
  };
}
