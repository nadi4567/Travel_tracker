# 🌍 Travel Tracker

### Travel Tracker is a simple web application that helps users log and track the countries they have visited. 
## Built using **Node.js, Express, PostgreSQL, and EJS**, it provides an interactive interface for managing visited countries.

## 🚀 Features
- 🌎 **Add countries** you have visited.
- 📋 **View** your visited countries list.
- 🔍 **Prevents duplicate entries** in the database.
- 🎨 Simple and user-friendly UI using **EJS**.
- 🛠️ **Uses PostgreSQL** for data storage.

## 🏗️ Installation

### 1️⃣ Clone the Repository
- git clone https://github.com/yourusername/travel-tracker.git
- cd travel-tracker

### 2️⃣ Install Dependencies
- npm i

3️⃣ Set Up PostgreSQL Database
### 1 Create a PostgreSQL database (e.g., world).
### 2 Import the required SQL schema.
## 3 Update database credentials in server.js.

### 4️⃣ Run the Application
- node index.js

### The app will be available at http://localhost:3000.

## 🏛️ Database Schema
## Countries Table

| Column       | Type        | Description          |
|--------------|-------------|----------------------|
| id           | INTEGER(PK) |Auto-incrementing ID  |
| country_code | CHAR(2)     | Unique country code  |
| country_name | CHAR(100)   | Full country name    |

### visited_countries Table

| Column       | Type        | Description          |
|--------------|-------------|----------------------|
| id           | INTEGER(PK) |Auto-incrementing ID  |
| country_code | CHAR(2)     | Unique country code  |

🛠️ Technologies Used
- Node.js + Express.js (Backend)
- PostgreSQL (Database)
- EJS (Templating)
-Bootstrap / CSS (Frontend)

## 📌 Future Improvements
# ✅ User authentication for personalized tracking.
# 📊 Data visualization (e.g., map view of visited countries).
# 🌍 API integration for live country data.






