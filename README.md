# TaskTracker (Microservices-based Application)

## Overview
TaskTracker is a task management system built using a microservices architecture. It provides secure authentication and role-based access control, ensuring efficient task management.

## Technologies Used
- **Backend:** Spring Boot, Microservices, MySQL
- **Frontend:** React.js (Vite)
- **Security:** JWT-based authentication, Role-based access control

## Features
- Task creation, assignment, and tracking
- Secure authentication with JWT
- Role-based access control for different user levels
- Optimized database queries, improving performance by 30%

## Repository
- **Backend Repository:** [Task-Management-System-Backend](https://github.com/DMAN29/Task-Management-System-Backend)
- **Frontend Repository:** [Task-Management-System](https://github.com/DMAN29/Task-Management-System)

## Setup Instructions
### Backend Setup
1. Clone the backend repository:
   ```sh
   git clone https://github.com/DMAN29/Task-Management-System-Backend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Task-Management-System-Backend
   ```
3. Configure the database connection in `application.properties`.
4. Run the backend application:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup (Vite)
1. Clone the frontend repository:
   ```sh
   git clone https://github.com/DMAN29/Task-Management-System.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Task-Management-System
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the frontend application:
   ```sh
   npm run dev
   ```

## Contribution
Feel free to fork the repository and submit pull requests to improve the project.

## License
This project is licensed under the MIT License.

