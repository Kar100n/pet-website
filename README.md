# Pet Paradise Website

## Introduction

Welcome to Pet Paradise, a delightful website showcasing adorable pets available for adoption. This project is built using Node.js, Express, MongoDB, and Mongoose.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Deploying on AWS EC2](#deploying-on-aws-ec2)
- [File Structure](#file-structure)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse through a collection of pets available for adoption.
- Contact the administrators with any questions or concerns.
- User authentication for login and sign up.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pet-paradise.git
   ```

2. Navigate to the project directory:

   ```bash
   cd pet-paradise
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Set up a MongoDB Atlas cluster and obtain the connection string.

2. Create a `.env` file in the project root and add the following:

   ```env
   MONGODB_URI=your-mongodb-atlas-connection-string
   PORT=3000
   ```

## Deploying on AWS EC2

1. Launch an EC2 instance and associate it with an Elastic IP.

2. SSH into your EC2 instance:

   ```bash
   ssh -i your-key.pem ec2-user@your-elastic-ip
   ```

3. Clone your repository on the EC2 instance:

   ```bash
   git clone https://github.com/your-username/pet-paradise.git
   ```

4. Navigate to the project directory and install dependencies:

   ```bash
   cd pet-paradise
   npm install
   ```

5. Start the application:

   ```bash
   npm start
   ```

   Visit [http://your-elastic-ip:3000](http://your-elastic-ip:3000) in your web browser.

## File Structure

- `public/`: Static files (HTML, CSS, client-side scripts)
- `routes/`: Express route handlers
- `models/`: Mongoose models
- `app.js`: Main application file
- `README.md`: Project documentation

## Troubleshooting

- If you encounter any MongoDB connection issues, ensure your IP is whitelisted on MongoDB Atlas.

## Contributing

Contributions are welcome! Fork the repository, create a branch, commit your changes, and open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

This version includes a new section on deploying the application on an AWS EC2 instance with an Elastic IP. Adjust the placeholders like `your-key.pem` and `your-elastic-ip` with your actual key file and Elastic IP address.
