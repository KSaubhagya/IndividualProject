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
  },
};

// Cloudinary config
export const CLOUDINARY = {
  CLOUD_NAME: "kavindi",
  UPLOAD_PRESET: "ReactProject",
  UPLOAD_URL: (cloudName) =>
    `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
};
