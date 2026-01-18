// API Base URL configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const API_ENDPOINTS = {
  // User endpoints
  getUser: `${API_BASE_URL}/api/v1/user/getuser`,
  login: `${API_BASE_URL}/api/v1/user/login`,
  register: `${API_BASE_URL}/api/v1/user/register`,
  logout: `${API_BASE_URL}/api/v1/user/logout`,
  
  // Job endpoints
  getAllJobs: `${API_BASE_URL}/api/v1/job/getall`,
  getMyJobs: `${API_BASE_URL}/api/v1/job/getmyjobs`,
  postJob: `${API_BASE_URL}/api/v1/job/post`,
  getJob: (id) => `${API_BASE_URL}/api/v1/job/${id}`,
  updateJob: (id) => `${API_BASE_URL}/api/v1/job/update/${id}`,
  deleteJob: (id) => `${API_BASE_URL}/api/v1/job/delete/${id}`,
  
  // Application endpoints
  postApplication: `${API_BASE_URL}/api/v1/application/post`,
  getEmployerApplications: `${API_BASE_URL}/api/v1/application/employer/getall`,
  getJobseekerApplications: `${API_BASE_URL}/api/v1/application/jobseeker/getall`,
  deleteApplication: (id) => `${API_BASE_URL}/api/v1/application/delete/${id}`,
};
