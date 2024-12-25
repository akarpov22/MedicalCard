import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
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
    id: ID!
    userId: Int!
    user: User!
    dateTime: String!
    status: String!
  }

  type MedicalRecord {
    id: ID!
    userId: Int!
    user: User!
    diagnosis: String!
    createdAt: String!
  }

  type Clinic {
    id: ID!
    name: String!
    address: String!
    contact: String!
  }

  type Prescription {
    id: ID!
    userId: Int!
    user: User!
    medication: String!
    dosage: String!
    duration: String!
  }

  type Review {
    id: ID!
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
    updateUser(id: ID!, name: String, email: String, role: String): User!
    deleteUser(id: ID!): User!

    # Appointment Mutations
    createAppointment(userId: Int!, dateTime: String!, status: String!): Appointment!
    updateAppointment(id: ID!, dateTime: String, status: String): Appointment!
    deleteAppointment(id: ID!): Appointment!

    # Medical Record Mutations
    createMedicalRecord(userId: Int!, diagnosis: String!): MedicalRecord!
    updateMedicalRecord(id: ID!, diagnosis: String): MedicalRecord!
    deleteMedicalRecord(id: ID!): MedicalRecord!

    # Clinic Mutations
    createClinic(name: String!, address: String!, contact: String!): Clinic!
    updateClinic(id: ID!, name: String, address: String, contact: String): Clinic!
    deleteClinic(id: ID!): Clinic!

    # Prescription Mutations
    createPrescription(userId: Int!, medication: String!, dosage: String!, duration: String!): Prescription!
    updatePrescription(id: ID!, medication: String, dosage: String, duration: String): Prescription!
    deletePrescription(id: ID!): Prescription!

    # Review Mutations
    createReview(patientId: Int!, doctorId: Int!, comment: String!, rating: Int!): Review!
    updateReview(id: ID!, comment: String, rating: Int): Review!
    deleteReview(id: ID!): Review!
  }
`;

export default typeDefs;
