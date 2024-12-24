# Medical Card Backend

This is a backend project for the Medical Card system, designed to manage user data, appointments, medical records, and clinics. The backend is built with Node.js, TypeScript, Apollo GraphQL, and Prisma, with PostgreSQL as the database.

## Features
- User management (CRUD operations for patients and medical staff)
- Appointment scheduling
- Medical record handling
- Clinic management
- GraphQL API for efficient data querying

## Technologies
- **Backend:** Node.js, TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **API:** Apollo GraphQL
- **Development Environment:** VS Code
- **Version Control:** Git
- **Testing:** Jest

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd medical-card-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` file:
   ```env
   DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
   ```
4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the server:
   ```bash
   npm run dev
   ```

## Usage
- Access the GraphQL Playground at `http://localhost:4000`.
- Use GraphQL queries and mutations to interact with the system.

## License
This project is licensed under the MIT License.
