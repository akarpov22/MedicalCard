import * as yup from 'yup';

// User Validation
export const userValidationSchema = yup.object({
  name: yup.string().required().max(255),
  email: yup.string().email().required(),
  role: yup.string().oneOf(['ADMIN', 'USER']).required(),
});

// Appointment Validation
export const appointmentValidationSchema = yup.object({
  userId: yup.number().integer().positive().required(),
  dateTime: yup.string().required().test('is-date', 'Invalid date format', (value) => {
    return !value || !isNaN(Date.parse(value));
  }),
  status: yup.string().required().max(50),
});

// Medical Record Validation
export const medicalRecordValidationSchema = yup.object({
  userId: yup.number().integer().positive().required(),
  diagnosis: yup.string().required().max(255),
});

// Clinic Validation
export const clinicValidationSchema = yup.object({
  name: yup.string().required().max(255),
  address: yup.string().required().max(500),
  contact: yup.string().required().max(100),
});

// Prescription Validation
export const prescriptionValidationSchema = yup.object({
  userId: yup.number().integer().positive().required(),
  medication: yup.string().required().max(255),
  dosage: yup.string().required().max(100),
  duration: yup.string().required().max(100),
});

// Review Validation
export const reviewValidationSchema = yup.object({
  patientId: yup.number().integer().positive().required(),
  doctorId: yup.number().integer().positive().required(),
  comment: yup.string().required().max(500),
  rating: yup.number().integer().min(1).max(5).required(),
});
