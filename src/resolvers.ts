import { PrismaClient } from '@prisma/client';
import { createUserManager } from './controllers/UserManager';
import { createAppointmentManager } from './controllers/AppointmentManager';
import { createMedicalRecordManager } from './controllers/MedicalRecordManager';
import { createClinicManager } from './controllers/ClinicManager';
import { createPrescriptionManager } from './controllers/PrescriptionManager';
import { createReviewManager } from './controllers/ReviewManager';

const prisma = new PrismaClient();

const userManager = createUserManager(prisma);
const appointmentManager = createAppointmentManager(prisma);
const medicalRecordManager = createMedicalRecordManager(prisma);
const clinicManager = createClinicManager(prisma);
const prescriptionManager = createPrescriptionManager(prisma);
const reviewManager = createReviewManager(prisma);

export const Query = {
  users: async () => userManager.findAllUsers(),
  appointments: async () => appointmentManager.findAllAppointments(),
  medicalRecords: async () => medicalRecordManager.findAllMedicalRecords(),
  clinics: async () => clinicManager.findAllClinics(),
  prescriptions: async () => prescriptionManager.findAllPrescriptions(),
  reviews: async () => reviewManager.findAllReviews(),
};

export const Mutation = {
  createUser: async (_: unknown, args: { name: string; email: string; role: string }) => userManager.createUser(args),
  updateUser: async (_: unknown, args: { id: number; name?: string; email?: string; role?: string }) => userManager.updateUser(args.id, args),
  deleteUser: async (_: unknown, args: { id: number }) => userManager.deleteUser(args.id),

  createAppointment: async (_: unknown, args: { userId: number; dateTime: string; status: string }) => appointmentManager.createAppointment(args),
  updateAppointment: async (_: unknown, args: { id: number; dateTime?: string; status?: string }) => appointmentManager.updateAppointment(args.id, args),
  deleteAppointment: async (_: unknown, args: { id: number }) => appointmentManager.deleteAppointment(args.id),

  createMedicalRecord: async (_: unknown, args: { userId: number; diagnosis: string }) => medicalRecordManager.createMedicalRecord(args),
  updateMedicalRecord: async (_: unknown, args: { id: number; diagnosis?: string }) => medicalRecordManager.updateMedicalRecord(args.id, args),
  deleteMedicalRecord: async (_: unknown, args: { id: number }) => medicalRecordManager.deleteMedicalRecord(args.id),

  createClinic: async (_: unknown, args: { name: string; address: string; contact: string }) => clinicManager.createClinic(args),
  updateClinic: async (_: unknown, args: { id: number; name?: string; address?: string; contact?: string }) => clinicManager.updateClinic(args.id, args),
  deleteClinic: async (_: unknown, args: { id: number }) => clinicManager.deleteClinic(args.id),

  createPrescription: async (_: unknown, args: { userId: number; medication: string; dosage: string; duration: string }) => prescriptionManager.createPrescription(args),
  updatePrescription: async (_: unknown, args: { id: number; medication?: string; dosage?: string; duration?: string }) => prescriptionManager.updatePrescription(args.id, args),
  deletePrescription: async (_: unknown, args: { id: number }) => prescriptionManager.deletePrescription(args.id),

  createReview: async (_: unknown, args: { patientId: number; doctorId: number; comment: string; rating: number }) => reviewManager.createReview(args),
  updateReview: async (_: unknown, args: { id: number; comment?: string; rating?: number }) => reviewManager.updateReview(args.id, args),
  deleteReview: async (_: unknown, args: { id: number }) => reviewManager.deleteReview(args.id),
};
