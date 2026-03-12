# Movie Diary – DBMS Project

## Overview

Movie Diary is a full-stack web application that allows users to view and manage a movie collection.
The project demonstrates database design, API development, and frontend integration.

## Tech Stack

- MySQL (Database)
- Node.js + Express (Backend API)
- React (Frontend)

## Project Structure

movie-diary-dbms
│
├── backend → Express API
├── frontend → React application
├── database → SQL schema
└── README.md

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/ssidharth448/movie-diary-dbms.git

### 2. Setup Database

Open MySQL and run:

SOURCE database/schema.sql;

### 3. Run Backend

cd backend
npm install
node server.js

Server runs on: http://localhost:3001

### 4. Run Frontend

cd frontend
npm install
npm start

Frontend runs on: http://localhost:3000 (or next available port)

## API Endpoint

GET /movies → returns movie list from database.

## Team Members

Group 4

- Gokul Krishna
- Navami Menon
- Nimisha S
- Sai Krishna S
- Sidharth S
