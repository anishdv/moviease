# Moviease - Movie Booking Project

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Upcoming Features](#upcoming-features)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Moviease is a web-based movie booking application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to browse and book movie tickets online, provides a user-friendly experience for both administrators and customers, and offers various features to enhance the movie booking process. It is in building stage and evolving continuously.

## Technologies Used

- **Frontend**: React.js, Redux, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration for Future**: Stripe
- **Responsive Design**: Material UI

## Features

Moviease offers the following functionalities:

1. **Movie Booking**:

   - Users can browse the list of available movies, view movie details, and make bookings for specific showtimes.

2. **Responsive Design**:

   - The website is fully responsive, ensuring a seamless user experience on various devices and screen sizes.

3. **Admin Capabilities**:

   - Admins can add new movies to the system, including movie details, showtimes, and seating arrangements.

4. **User Profiles**:

   - Both administrators and users have dedicated profile pages to manage their account information.

5. **Search Functionality**:
   - Users can easily search for movies based on criteria such as movie title, genre, or release date.

## Getting Started

To get Moviease up and running on your local machine, follow these steps:

### Prerequisites

- Node.js and npm installed on your system.
- MongoDB installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anishdv/moviease.git
   cd moviease
   ```

2. Install server dependencies:

   ```bash
   cd backend
   npm install
   ```

3. Install client dependencies:

   ```bash
   cd ../frontend
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the server directory and configure environment variables like database connection string, JWT secret, Stripe API keys, and any other necessary variables.

5. Start the server:

   ```bash
   cd ../backend
   npm start
   ```

6. Start the client:
   ```bash
   cd ../frontend
   npm start
   ```

Now, Moviease should be running locally, and you can access it by opening your web browser and navigating to `http://localhost:3000`.

## Usage

You can use Moviease to perform the following tasks:

- As an **Admin**:

  - Log in to your admin profile.
  - Add new movies and showtimes.
  - Manage existing movies and bookings.

- As a **User**:
  - Create an account or log in.
  - Browse available movies.
  - Search for movies.
  - Book tickets for a specific movie and showtime.

## Upcoming Features

The development of Moviease is ongoing, and we plan to add the following features in the future:

1. **Visual Seating Selection**:

   - Users will be able to see a graphical representation of available and occupied seats in the cinema hall before booking.

2. **Email Validation for Sign-ups**:

   - Implement email validation to enhance security and user account management.

3. **Payment Integration using Stripe**:
   - Full payment integration using the Stripe payment gateway for secure and convenient transactions.

---

Thank you for visiting the page ! If you have any questions or encounter any issues, please feel free to reach out to us. Enjoy your movie booking experience!
