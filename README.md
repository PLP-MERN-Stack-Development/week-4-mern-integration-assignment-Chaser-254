# MERN Blog Application

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a modern, responsive design with comprehensive blog management capabilities.

![MERN Blog Application](image.png)

## ✨ Features

### Core Functionality
- **User Authentication & Authorization** - Secure JWT-based authentication system
- **Full CRUD Operations** - Create, read, update, and delete blog posts
- **Rich Content Management** - Categories, tags, and featured image uploads
- **Interactive Features** - Comments system and post view tracking
- **User Experience** - Dark/light theme toggle with localStorage persistence

### Technical Features
- **Protected Routes** - Secure dashboard and user-specific pages
- **File Upload** - Featured image upload with preview functionality
- **Responsive Design** - Mobile-first approach with TailwindCSS
- **Loading States** - Spinners and toast notifications for better UX
- **Password Recovery** - Forgot password flow implementation
- **Profile Management** - User profile pages with account management

## 🛠️ Tech Stack

### Frontend
- **React.js** - Component-based UI library
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **react-hot-toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload middleware
- **JWT** - JSON Web Token authentication

## 📁 Project Structure

```
mern-blog/
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── PostForm.jsx
│   │   │   ├── PostCard.jsx
│   │   │   └── Spinner.jsx
│   │   ├── context/           # React Context providers
│   │   │   └── ThemeContext.jsx
│   │   ├── hooks/             # Custom React hooks
│   │   │   └── useAuth.js
│   │   ├── pages/             # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Profile.jsx
│   │   ├── services/          # API service functions
│   │   │   ├── postService.js
│   │   │   └── categoryService.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── tailwind.config.js
│   └── package.json
├── server/                    # Node.js backend
│   ├── config/               # Configuration files
│   │   └── database.js
│   ├── controllers/          # Route controllers
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── categoryController.js
│   ├── middleware/           # Custom middleware
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/               # Database models
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Category.js
│   ├── routes/               # API routes
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── categoryRoutes.js
│   ├── uploads/              # File upload directory
│   ├── .env
│   └── package.json
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Backend Setup

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment variables:**
   Create a `.env` file in the `/server` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-blog
   JWT_SECRET=your_super_secret_jwt_key_here
   NODE_ENV=development
   ```

4. **Start the backend server:**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to the client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment variables:**
   Create a `.env` file in the `/client` directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Start the frontend application:**
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Available Routes

### Public Routes
- `/` - Home page displaying latest blog posts
- `/posts/:slug` - Individual post detail page
- `/login` - User login page
- `/register` - User registration page
- `/forgot-password` - Password recovery page

### Protected Routes
- `/dashboard` - User dashboard (requires authentication)
- `/create-post` - Create new blog post
- `/edit-post/:slug` - Edit existing post
- `/profile` - User profile management

## Authentication Flow

1. **Registration/Login** - Users can create accounts or log in with existing credentials
2. **JWT Token** - Upon successful authentication, a JWT token is stored in localStorage
3. **Protected Access** - Protected routes verify the token before allowing access
4. **Session Management** - Logout functionality clears the stored token

##  Dark Mode

The application includes a theme toggle feature that:
- Switches between light and dark modes
- Persists user preference in localStorage
- Applies theme across all components consistently

## File Upload

- **Featured Images** - Users can upload images when creating/editing posts
- **Preview Functionality** - Image preview before saving
- **Storage** - Images are stored in the `/server/uploads` directory
- **File Validation** - Only image files are accepted

## Password Recovery

The forgot password feature includes:
- Email-based password reset requests
- Secure token generation for password reset
- User-friendly reset process

## Responsive Design

- Mobile-first approach using TailwindCSS
- Optimized for various screen sizes
- Touch-friendly interface elements
- Consistent user experience across devices

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request