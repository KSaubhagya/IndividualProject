import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = ({ isAdmin = false }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/blogs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  // Split content into paragraphs
  const paragraphs = blog.content
    .split(/\n|\.\s+/)
    .filter((p) => p.trim().length > 0);

  return (
    <div
      style={{
        padding: "30px",
        color: "#fff",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      {/* Fixed-size image */}
      {blog.image && (
        <img
          src={`http://localhost:9000${blog.image}`}
          alt={blog.title}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "25px",
          }}
        />
      )}

      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{blog.title}</h1>
      <h4 style={{ fontWeight: "normal", color: "#bbb", marginBottom: "20px" }}>
        By {blog.author} • {blog.date}
      </h4>

      <div style={{ lineHeight: "1.5", fontSize: "1.3rem", textAlign: "left" }}>
        {paragraphs.map((p, index) => (
          <p key={index} style={{ marginBottom: "20px" }}>
            {p.trim()}.
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
