# PLP Task Manager

A responsive React application that demonstrates modern front-end development practices using React.js, JSX, and Tailwind CSS.

## 🌟 Features

- **Task Management**
  - Create, complete, and delete tasks
  - Filter tasks by status (All, Active, Completed)
  - Persistent storage using localStorage

- **API Integration**
  - Fetch and display posts from JSONPlaceholder API
  - Search functionality for posts
  - Pagination with smooth transitions
  - Loading states and error handling

- **Theme Support**
  - Toggle between light and dark mode
  - Persistent theme preference
  - Smooth theme transitions

- **Responsive Design**
  - Mobile-first approach
  - Tailwind CSS utility classes
  - Custom animations and transitions

## 🛠️ Technologies Used

- React.js
- Vite
- Tailwind CSS
- React Router
- Context API
- Custom Hooks

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Navigate to the fronend directory
```bash
cd frontend
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

The application will be available at http://localhost:5173

## 📁 Project Structure
plp-task-manager/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   │
│   ├── components/
│   │   ├── ApiExplorer.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── TaskManager.jsx
│   │
│   ├── context/
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── utils/
│   │   └── utils.js
│   │
│   ├── App.jsx
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tailwind.config.js

## Directory Breakdown

- `public/` - Static assets and HTML template
- `src/components/` - Reusable UI components
- `src/context/` - React Context for global state management
- `src/hooks/` - Custom React hooks
- `src/pages/` - Page-level components
- `src/utils/` - Helper functions and utilities
- `src/App.jsx` - Root application component
- `src/index.js` - Application entry point

## Task Management

1. Add a Task: Type your task in the input field and click "Add" or press Enter
2. Complete a Task: Click the checkbox next to a task to mark it as complete
3. Delete a Task: Click the red "✕" button to remove a task
4. Filter Tasks: Use the filter buttons to view all, active, or completed tasks

## API Explorer

1. Browse Posts: Scroll through the paginated list of posts
2. Search: Use the search bar to filter posts by title
3. Navigate: Use Previous/Next buttons to browse through pages

## 🎨 UI Components
- Button: Reusable button component with different variants (primary, secondary, danger)
- Card: Component for displaying content in a boxed layout
-Navbar: Navigation component with theme toggle
- TaskManager: Main component for task management functionality
- ApiExplorer: Component for displaying and interacting with API data

## 🔧 Configuration
The project uses the following main configuration files:

- vite.config.js - Vite configuration
- tailwind.config.js - Tailwind CSS configuration
- eslint.config.js - ESLint rules and settings
- .env - Environment variables

## 🌐 Deployment
### Deploy to Netlify

1. Build your project: npm run build
2. Drag and drop the build folder to Netlify

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
1. Install Github Pages dependecy
```bash
cd frontend
npm install gh-pages --save-dev
```
2. Update package.json
```json
{
  "name": "plp-task-manager",
  "private": true,
  "homepage": "https://{your-github-username}.github.io/{repository-name}",
  "scripts": {
    // ...existing scripts...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update vite.config.js
```bash
export default defineConfig({
  base: '/{repository-name}/',
  plugins: [react()]
})
```

4. Deployment Steps
```bash
# Initialize git if not already done
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/{your-github-username}/{repository-name}.git

# Add and commit your changes
git add .
git commit -m "Ready for deployment"

# Push to GitHub
git push origin main

# Deploy to GitHub Pages
npm run deploy
```
5. Configure GitHub Repository
- Go to your GitHub repository
- Click on Settings
- Scroll to Pages section
- Under Source, select gh-pages branch
- Click Save
Your site will be published at https://{your-github-username}.github.io/{repository-name}

Note: Replace {your-github-username} and {repository-name} with your actual GitHub username and repository name.

The deployment usually takes a few minutes. You can check the status in your repository's Actions tab.

## Deployment Link
https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-Hilda-Baraiywo/deployments/github-pages

## 📝 License
This project is licensed under the MIT License.

## 👥 Contributing
- Fork the repository
- Create your feature branch (git checkout -b feature/AmazingFeature)
- Commit your changes (git commit -m 'Add some AmazingFeature')
- Push to the branch (git push origin feature/AmazingFeature)
- Open a Pull Request