import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    role: String!
    appointments: [Appointment!]!
    medicalRecords: [MedicalRecord!]!
    prescriptions: [Prescription!]!
    reviewsWritten: [Review!]!
    reviewsReceived: [Review!]!
    createdAt: String!
    updatedAt: String!
  }

  type Appointment {
    id: Int!
    userId: Int!
    user: User!
    dateTime: String!
    status: String!
  }

  type MedicalRecord {
    id: Int!
    userId: Int!
    user: User!
    diagnosis: String!
    createdAt: String!
  }

  type Clinic {
    id: Int!
    name: String!
    address: String!
    contact: String!
  }

  type Prescription {
    id: Int!
    userId: Int!
    user: User!
    medication: String!
    dosage: String!
    duration: String!
  }

  type Review {
    id: Int!
    patientId: Int!
    patient: User!
    doctorId: Int!
    doctor: User!
    comment: String!
    rating: Int!
    createdAt: String!
  }

  type Query {
    users: [User!]!
    appointments: [Appointment!]!
    medicalRecords: [MedicalRecord!]!
    clinics: [Clinic!]!
    prescriptions: [Prescription!]!
    reviews: [Review!]!
  }

  type Mutation {
    # User Mutations
    createUser(name: String!, email: String!, role: String!): User!
    updateUser(id: Int!, name: String, email: String, role: String): User!
    deleteUser(id: Int!): User!

    # Appointment Mutations
    createAppointment(userId: Int!, dateTime: String!, status: String!): Appointment!
    updateAppointment(id: Int!, dateTime: String, status: String): Appointment!
    deleteAppointment(id: Int!): Appointment!

    # Medical Record Mutations
    createMedicalRecord(userId: Int!, diagnosis: String!): MedicalRecord!
    updateMedicalRecord(id: Int!, diagnosis: String): MedicalRecord!
    deleteMedicalRecord(id: Int!): MedicalRecord!

    # Clinic Mutations
    createClinic(name: String!, address: String!, contact: String!): Clinic!
    updateClinic(id: Int!, name: String, address: String, contact: String): Clinic!
    deleteClinic(id: Int!): Clinic!

    # Prescription Mutations
    createPrescription(userId: Int!, medication: String!, dosage: String!, duration: String!): Prescription!
    updatePrescription(id: Int!, medication: String, dosage: String, duration: String): Prescription!
    deletePrescription(id: Int!): Prescription!

    # Review Mutations
    createReview(patientId: Int!, doctorId: Int!, comment: String!, rating: Int!): Review!
    updateReview(id: Int!, comment: String, rating: Int): Review!
    deleteReview(id: Int!): Review!
  }
`;

export default typeDefs;
