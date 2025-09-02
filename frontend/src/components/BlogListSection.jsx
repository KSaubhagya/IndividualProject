import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogList, BlogCard, SmallBlogCard } from "../styles/AdminBlogsStyles";

const BlogListSection = ({
  showAdminControls = true,
  blogs: propBlogs,
  onDelete,
}) => {
  const CardComponent = showAdminControls ? BlogCard : SmallBlogCard;
  const [blogs, setBlogs] = useState(propBlogs || []);

  // Only fetch blogs if not provided as props
  useEffect(() => {
    if (!propBlogs) {
      fetchBlogs();
    }
  }, [propBlogs]);

  // Update internal state if propBlogs changes
  useEffect(() => {
    if (propBlogs) {
      setBlogs(propBlogs);
    }
  }, [propBlogs]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:9000/api/blogs");
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDeleteClick = async (blogId) => {
    if (onDelete) {
      onDelete(blogId);
    } else {
      // Your existing handleDelete logic
      try {
        const response = await fetch(
          `http://localhost:9000/api/blogs/${blogId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          setBlogs(blogs.filter((blog) => blog.id !== blogId));
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <BlogList>
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          to={
            showAdminControls ? `/admin/blogs/${blog.id}` : `/blogs/${blog.id}`
          }
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardComponent>
            {/* Hide image when not in admin view */}
            {showAdminControls && blog.image && (
              <img
                src={`http://localhost:9000${blog.image}`}
                alt={blog.title}
              />
            )}
            <h3>{blog.title}</h3>
            <p>
              {blog.content
                .split(/(?<=[.!?])\s+/)
                .slice(0, showAdminControls ? 1 : 2)
                .join(" ")}
            </p>

            {/* Only show date + delete button in admin */}
            {showAdminControls && (
              <>
                <span>{blog.date}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDeleteClick(blog.id);
                  }}
                  style={{
                    background: "#6c63ff",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </CardComponent>
        </Link>
      ))}
    </BlogList>
  );
};

export default BlogListSection;
