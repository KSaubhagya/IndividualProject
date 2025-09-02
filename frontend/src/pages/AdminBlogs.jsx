import { useState, useEffect } from "react";
import { BlogPageLayout, BlogForm } from "../styles/AdminBlogsStyles";
import BlogListSection from "../components/BlogListSection";
import { API_URLS } from "../config/constants";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    author: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(API_URLS.BLOGS.GET_ALL);
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setNewBlog({ ...newBlog, image: file });

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
    } else {
      setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.content) return;

    try {
      const formData = new FormData();
      formData.append("title", newBlog.title);
      formData.append("content", newBlog.content);
      formData.append("author", newBlog.author);
      if (newBlog.image) {
        formData.append("image", newBlog.image);
      }

      const response = await fetch(API_URLS.BLOGS.CREATE, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newEntry = await response.json();
        setBlogs([newEntry, ...blogs]);
        setNewBlog({ title: "", content: "", image: null });
        setImagePreview(null);
        document.getElementById("image-input").value = ""; // Reset file input
      } else {
        console.error("Failed to create blog");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (blogId) => {
    try {
      const response = await fetch(API_URLS.BLOGS.DELETE(blogId), {
        method: "DELETE",
      });

      if (response.ok) {
        setBlogs(blogs.filter((blog) => blog.id !== blogId));
      } else {
        console.error("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <BlogPageLayout>
      <BlogForm onSubmit={handleSubmit}>
        <h2>Add New Blog</h2>
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBlog.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          rows="4"
          placeholder="Blog Content"
          value={newBlog.content}
          onChange={handleChange}
          required
        />
        <input
          id="image-input"
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
        {imagePreview && (
          <div style={{ marginTop: "10px" }}>
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                maxWidth: "200px",
                maxHeight: "200px",
                borderRadius: "8px",
              }}
            />
          </div>
        )}
        <button type="submit">Add Blog</button>
      </BlogForm>

      <h2 style={{ color: "#ffffff", marginBottom: "20px" }}>Existing Blogs</h2>
      <BlogListSection
        showAdminControls={true}
        blogs={blogs}
        onDelete={handleDelete}
      />
    </BlogPageLayout>
  );
};

export default AdminBlogs;
