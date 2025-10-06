# 🚀 DevOps Practice

This project demonstrates building a simple Node.js application and applying DevOps practices, including CI/CD automation.

## 🛠️ Steps Followed

### 1. Create a Node.js App
- Initialized a Node.js project with `npm init`.
- Built a simple Express server that responds with:
  ```
  Hello World Small Project to practice devops
  ```

### 2. Write Automated Tests
- Added Jest and Supertest for testing.
- Created a test to verify the root endpoint returns the expected message.

### 3. Version Control with Git
- Tracked source code with Git.
- Used `.gitignore` to exclude `node_modules` and `package-lock.json`.

### 4. Dockerize the Application
- Created a `Dockerfile` to containerize the app for consistent deployment.

### 5. Set Up CI/CD Pipeline
- Added a GitHub Actions workflow (`.github/workflows/ci.yml`) for:
  - Installing dependencies
  - Running tests
  - Building the Docker image
  - Simulating deployment to staging

## 📂 Project Structure

```
.
├── app.js
├── server.js
├── test/
│   └── app.test.js
├── Dockerfile
├── .github/
│   └── workflows/
│       └── ci.yml
├── package.json
├── jest.config.js
└── .gitignore
```

## 🎯 Outcome

- Automated testing and deployment steps ensure code quality and reliability.
- The project is ready for further DevOps enhancements!

---
Happy DevOps-ing! 🤖✨