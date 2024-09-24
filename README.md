# SpringJWT

**SpringJWT** is a demo project designed to help developers understand how to implement **JWT (JSON Web Token)** authentication with **Spring Security**. This project showcases a backend solution using bearer tokens for secure authentication and includes a sample frontend for testing purposes.

## Features

- **JWT Authentication**: Secure user authentication using JWT bearer tokens.
- **Spring Security Integration**: Leveraging Spring Security to manage user access.
- **Token Generation and Validation**: Supports token issuance and validation with secure key management.
- **Sample Frontend**: A basic frontend provided for testing authentication and secure routes.
- **Custom Exception Handling**: Handles invalid credentials and other security exceptions.

## Project Structure

```
src/
├── main/
│   ├── java/lk/ijse/jwt/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── dto/
│   │   ├── entity/
│   │   ├── repository/
│   │   ├── service/
│   │   ├── util/
│   └── resources/
│       └── application.properties
└── templates/
```

## How It Works

1. **JWT Token Generation**: After successful login or registration, the backend generates a JWT token using user credentials.
2. **Token Validation**: For secure routes, the token is validated to authenticate the user.
3. **Role-Based Authorization**: Different user roles can access specific routes based on the token.
4. **Sample Frontend Testing**: The frontend helps test login and authentication flow.

## Requirements

- **Java 11+**
- **Maven**
- **Spring Boot**
- **MySQL** (or any compatible database)
- **Postman** (for API testing)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/gayanukabulegoda/SpringJWT.git
```
### 2. Configure the Application
Edit `application.properties` to set your MySQL connection details:
```bash
spring.datasource.url=jdbc:mysql://localhost:3306/springjwt
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```
### 3. Build and Run the Application
```bash
mvn clean install
mvn spring-boot:run
```
The backend will start running at `http://localhost:8080`.

### 4. Frontend Testing
The project includes a simple frontend to test JWT authentication.

### 5. API Documentation
Postman Documentation: [API Documentation](https://documenter.getpostman.com/view/36681432/2sAXqwXeJP)

## License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE)  file for details.

##
<div align="center">
<a href="https://github.com/gayanukabulegoda" target="_blank"><img src = "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://git-scm.com/" target="_blank"><img src = "https://img.shields.io/badge/Git-100000?style=for-the-badge&logo=git&logoColor=white"></a>
<a href="https://spring.io/projects/spring-boot" target="_blank"><img src = "https://img.shields.io/badge/Spring_Boot-100000?style=for-the-badge&logo=spring-boot&logoColor=white"></a>
<a href="https://spring.io/projects/spring-security" target="_blank"><img src = "https://img.shields.io/badge/Spring_Security-100000?style=for-the-badge&logo=Spring-Security&logoColor=white"></a>
<a href="https://jwt.io/" target="_blank"><img src = "https://img.shields.io/badge/JWT-100000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"></a>
<a href="https://www.json.org/json-en.html" target="_blank"><img src = "https://img.shields.io/badge/json-100000?style=for-the-badge&logo=json&logoColor=white"></a>
<a href="https://maven.apache.org/download.cgi" target="blank"><img src = "https://img.shields.io/badge/Maven-100000?style=for-the-badge&logo=apachemaven&logoColor=white"></a>
<a href="https://www.mysql.com/downloads/" target="blank"><img src = "https://img.shields.io/badge/Mysql-100000?style=for-the-badge&logo=mysql&logoColor=white"></a>
<a href="https://www.postman.com/downloads/" target="blank"><img src = "https://img.shields.io/badge/Postman-100000?style=for-the-badge&logo=Postman&logoColor=white"></a>
</div> <br>
<p align="center">
  &copy; 2024 Gayanuka Bulegoda
</p>
