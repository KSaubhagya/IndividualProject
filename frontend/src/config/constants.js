const SERVICE_BASE_URL = "http://localhost:9000";

export const API_URLS = {
  USER: {
    USER: SERVICE_BASE_URL + "/users",
  },
  FILES: {
    BASE: SERVICE_BASE_URL + "/files",
    PROCESS: SERVICE_BASE_URL + "/files/process",
    SAVE_CLOUDINARY_URLS: SERVICE_BASE_URL + "/files/save-cloudinary-urls",
    DOWNLOAD: (fileId) => SERVICE_BASE_URL + `/files/download/${fileId}`,
  },
  BLOGS: {
    BASE: SERVICE_BASE_URL + "/api/blogs",
    GET_ALL: SERVICE_BASE_URL + "/api/blogs",
    CREATE: SERVICE_BASE_URL + "/api/blogs",
    DELETE: (id) => SERVICE_BASE_URL + `/api/blogs/${id}`,
    GET_ONE: (id) => SERVICE_BASE_URL + `/api/blogs/${id}`,
    IMAGE: (path) => SERVICE_BASE_URL + path,
  },
  ADMIN: {
    STATS: SERVICE_BASE_URL + "/api/admin/stats",
    USER_LIST: SERVICE_BASE_URL + "/api/admin/user-list",
  },
  FEEDBACK: {
    SUBMIT: SERVICE_BASE_URL + "/feedback/",
  },
};

// Cloudinary config
export const CLOUDINARY = {
  CLOUD_NAME: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  UPLOAD_PRESET: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
  UPLOAD_URL: (cloudName) =>
    `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
};
