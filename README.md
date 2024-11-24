# Todo Application

A Todo application built with Vite and Typescript, using redux, form validation, and a responsive design.

## 🚀 Features

- Create and remove todos
- Data persistence across browser sessions
- Responsive design with Tailwind CSS
- Type-safe development with TypeScript
- State management with Redux Toolkit
- Form validation with Zod schema

## 🛠️ Technologies Used

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate Redux store
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/erinoggz/todo
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Running the Application

### Development Mode
To run the application in development mode:
```bash
npm run dev
```
This will start the development server, at `http://localhost:5173`

### Building for Production
To create a production build:
```bash
npm run build
```
This command:
- Creates an optimized production build with Vite

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```
This will serve the production build for testing before deployment.

## 🏗️ Project Structure

```
src/
├── components/    # Reusable UI components
├── store/         # Redux store configuration
├── schemas/       # Zod validation schemas
└── App.tsx        # Main application component
```

## 💻 Usage

1. Add a new todo using the input form
2. Remove todos using the remove button