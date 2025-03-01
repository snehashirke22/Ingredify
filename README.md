# Ingredify AI (Recipe Generator and listing Web App)
Ingredify is a full-stack MERN web application that enables users to generate AI-powered recipes based on ingredients they provide. It also allows users to explore a wide range of categorized recipes using APIs. With a seamless and intuitive interface, Ingredify enhances the cooking experience by offering personalized recipe suggestions and an extensive recipe database.

Demo :- https://ingredify-ai.onrender.com/

![image](https://github.com/user-attachments/assets/ce02861a-8a09-4bd1-b377-0c56a240c657)


## Features
- **AI-Powered Recipe Generation**: Generate unique recipes based on user-provided ingredients.
- **Recipe Listing**: Browse recipes by category using the Spoonacular API.
- **Responsive Design**: Fully optimized for different screen sizes.
- **Interactive UI**: User-friendly interface with smooth navigation.
- **Fast Performance**: Built with Vite for faster development and optimized production builds.

## Tech Stack
- **Frontend**: React, Vite
- **Backend**: Node.js, Express.js
- **Styling**: Vanilla CSS
- **API**: Gemini API, Spoonacular API
- **Build Tool**: Vite
- **Deployment**: Render

## Installation

### 1. Clone the Repository
Clone the repository to your local machine:
```bash
git clone git clone https://github.com/snehashirke22/Ingredify.git
```

### 2. Navigate to project folder
```bash
cd Ingredify
```

### 3. Install Backend Dependencies
Navigate to the backend directory and install the backend dependencies:
```bash
cd Server
npm install
```

### 4. Install Frontend Dependencies
Navigate to the frontend directory and install the frontend dependencies:
```bash
cd Client
npm install
```

### 3. Running the Backend Server
```bash
cd Server
node server.js
```

### 4. Running the Frontend Server
```bash
cd Client
npm run dev
```
This will open the app in your browser at http://localhost:5173.

### Build for Production
To build the frontend for production:
```bash
npm run build
```
This will create a dist/ folder with the production-ready files.

### Deploy to Render
#### Backend
1. Push the code to GitHub.
2. Connect the `server/` folder to Render.
3. Set Root directory to: `Server/`
4. Set the Build Command to: `npm install`
5. Set the Start Command to: `node server.js`
6. Render will automatically deploy the backend.

   (Add the Backend URL to Frontend after Backend deployment and push the code to github)

#### Frontend
1. Push the code to GitHub.
2. Connect the `client/` folder to Render.
3. Set Root directory to: `Client/`
4. Set the Build Command to: `npm install && npm run build`
5. Set the Publish Directory to `dist/`.
6. Render will automatically deploy the frontend.
