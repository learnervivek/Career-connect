# Career Connect

A full-stack MERN job portal where employers post roles and job seekers apply, track applications, and manage submissions.

## Features

- Job search with title/category/location filters
- Rich job descriptions with company details
- Employer dashboard: post, edit, delete jobs; view applicants
- Job seeker dashboard: apply with resume upload (Cloudinary), view submissions
- Auth with JWT cookies; role-based access (Employer, Job Seeker)
- Responsive UI with modern styling

## Tech Stack

- Frontend: React (Vite), React Router, Axios, React Icons
- Backend: Node.js, Express, Mongoose
- Database: MongoDB
- File Storage: Cloudinary for resumes
- Auth: JWT with httpOnly cookies

## Project Structure

- backend/ — Express server, routes, controllers, models, middlewares
- frontend/ — React app (Vite), pages, components, styles

## Directory Tree

```
jobportal/
├── backend/
│   ├── controllers/
│   │   ├── applicationController.js
│   │   ├── jobController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── applicationSchema.js
│   │   ├── jobSchema.js
│   │   └── userSchema.js
│   ├── routes/
│   │   ├── applicationRoutes.js
│   │   ├── jobRoutes.js
│   │   └── userRoutes.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   ├── catchAsyncError.js
│   │   └── error.js
│   ├── database/
│   │   └── dbConnection.js
│   ├── utils/
│   │   └── jwtToken.js
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Application/
│   │   │   │   ├── Application.jsx
│   │   │   │   ├── MyApplications.jsx
│   │   │   │   └── ResumeModal.jsx
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── Home/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── HowItWorks.jsx
│   │   │   │   ├── PopularCategories.jsx
│   │   │   │   └── PopularCompanies.jsx
│   │   │   ├── Job/
│   │   │   │   ├── JobDetails.jsx
│   │   │   │   ├── Jobs.jsx
│   │   │   │   ├── MyJobs.jsx
│   │   │   │   └── PostJob.jsx
│   │   │   ├── Layout/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Navbar.jsx
│   │   │   └── NotFound/
│   │   │       └── NotFound.jsx
│   │   ├── utils/
│   │   │   ├── stripHtml.js
│   │   │   └── formatDate.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── main.css
│   ├── public/
│   │   └── CVs/
│   ├── package.json
│   ├── vite.config.js
│   ├── .env
│   └── .gitignore
│
├── README.md
└── .gitignore
```

## Prerequisites

- Node.js 18+
- MongoDB instance
- Cloudinary account (cloud name, API key/secret)

## Environment Variables

Create `.env` files in both backend and frontend.

**backend/.env**

```
PORT=4000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
JWT_EXPIRE=5d
COOKIE_EXPIRE=5
CLOUDINARY_NAME=<your_cloudinary_name>
CLOUDINARY_API_KEY=<your_cloudinary_key>
CLOUDINARY_API_SECRET=<your_cloudinary_secret>
FRONTEND_URL=http://localhost:5173
```

**frontend/.env**

```
VITE_BACKEND_URL=http://localhost:4000
```

## Installation

```bash
# backend (from backend/)
A full-stack MERN job portal where employers post roles and job seekers apply, track applications, and manage submissions.

# frontend (from frontend/)

## Features
```

## Running Locally

```bash
# start backend (from backend/)
- Job search with title/category/location filters

# start frontend (from frontend/)
- Rich job descriptions with company details
- Employer dashboard: post, edit, delete jobs; view applicants
```

Frontend runs on Vite (default 5173+); backend on 4000.

## API Overview (backend)

- POST /api/v1/user/register — register user
- POST /api/v1/user/login — login, sets JWT cookie
- GET /api/v1/user/getuser — current user
- POST /api/v1/job/post — create job (Employer)
- GET /api/v1/job/getall — list jobs
- GET /api/v1/job/:id — job details
- PUT /api/v1/job/update/:id — update job (Employer owner)
- DELETE /api/v1/job/delete/:id — delete job (Employer owner)
- POST /api/v1/application/post/:id — apply to a job (Job Seeker)
- GET /api/v1/application/employer/getall — applications for employer jobs
- GET /api/v1/application/jobseeker/getall — applications submitted by seeker

## Scripts

- Backend: `npm run dev` (nodemon) or `yarn dev`
- Frontend: `npm run dev` (Vite) or `yarn dev`

## Testing Checklist

- User auth: register/login/logout
- Employer: post job, edit, delete, view applicants
- Job Seeker: search jobs, view details, apply with resume upload
- Validation: required fields, file size/type limits
- CORS: backend `FRONTEND_URL` matches frontend origin

## Deployment Notes

- Set env vars on the server (Mongo, Cloudinary, JWT, FRONTEND_URL)
- Build frontend with `npm run build` then serve `dist`
- Serve backend over HTTPS; set secure cookies in production

## License

MIT

- Job seeker dashboard: apply with resume upload (Cloudinary), view submissions
- Auth with JWT cookies; role-based access (Employer, Job Seeker)
- Responsive UI with modern styling

## Tech Stack

- Frontend: React (Vite), React Router, Axios, React Icons
- Backend: Node.js, Express, Mongoose
- Database: MongoDB
- File Storage: Cloudinary for resumes
- Auth: JWT with httpOnly cookies

## Project Structure

- backend/ — Express server, routes, controllers, models, middlewares
- frontend/ — React app (Vite), pages, components, styles

## Prerequisites

- Node.js 18+
- MongoDB instance
- Cloudinary account (cloud name, API key/secret)

## Envi# Career Connect

A full-stack MERN job portal where employersntA full-stack ME/.

## Features

- Job search with title/category/location filters
- Rich job descriptions with company details
- Employer da=<y- Job sudina- Rich job descriptions with company details
- E>
- Employer dashboard: post, edit, delete joet- Job seeker dashboard: apply with resume upload (Cloudinary)``- Auth with JWT cookies; role-based access (Employer, Job Seeker)
- Responsive (- Responsive UI with modern styling

## Tech Stack

- Frontenfrom f

## Tech Stack

- Frontend: React ( #- Frontend: ta- Backend: Node.js, Express, Mongoose
- Database: MongoDBba- Database: MongoDB
- File Storage:
  #- File Storage: Clro- Auth: JWT with httpOnly cookies

##

## Project Structure

- backend/on - backend/ — Expr);- frontend/ — React app (Vite), pages, components, styles

## Prereqte

## Prerequisites

- Node.js 18+
- MongoDB instance
- Cloudets- Node.js 18- GET- MongoDB inr/- Cloudinary accont

## Envi# Career Connect

A full-stack MERN job pploA full-stack MERN job /g## Featuresist jobs

- GET /api/v1/job/:id — job details
- PUT /api/v1/job/- Rich job descriptions with company details
- EET- Employer da=<y- Job sudina- Rich job descpl- E>
- Employer dashboard: post, edit, delete joet- Job seeker dashboar S- Eer- Responsive (- Responsive UI with modern styling

## Tech Stack

- Frontenfrom f

## Tech Stack

- Frontend: React ( #- Frontend: ta- Backend: Node.js, Express, Mongoose
- D B

## Tech Stack

- Frontenfrom f

## Tech Stack

- FFro- Frontenfroru## Tech Stack
  or- Frontend:
  #- Database: MongoDBba- Database: MongoDB
- File Storage:
  #- File Storagjo- File Storage:
  #- File Storage: Clro-Se#- File Storagebs

##

## Project Structure

- backend/on - backend/ ? r## ir- backend/on - backe/

## Prereqte

## Prerequisites

- Node.js 18+
- MongoDB instance
- Cloudetsployment Notes
- Set e## Prerequ t- Node.js 18+
  go,- MongoDB in J- Cloudets-D_URL)
  -## Envi# Career Connect
  A full-stack MERN job pploA full-strvA full-st over HTTPS; se- GET /a cookies in production

## License

MIT
