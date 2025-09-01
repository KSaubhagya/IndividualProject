import styled from "styled-components";

export const BlogPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #2c2b3e;
  padding: 30px;
`;

export const BlogForm = styled.form`
  background-color: #383757;
  width: 700px;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px auto;
  h2 {
    color: #6c63ff;
    margin-bottom: 10px;
  }
  input,
  textarea {
    background: #2c2b3e;
    border: 1px solid #444;
    border-radius: 8px;
    padding: 12px;
    color: #ffffff;
    font-size: 1rem;
    resize: vertical;
  }
  input:focus,
  textarea:focus {
    border-color: #6c63ff;
    outline: none;
  }
  button {
    background-color: #6c63ff;
    border: none;
    padding: 12px;
    border-radius: 8px;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  button:hover {
    background-color: #5548e0;
  }
`;

export const BlogList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

export const BlogCard = styled.div`
  background-color: #383757;
  padding: 20px;
  margin: 30px;
  height: 400px;
  overflow: hidden;
  border-radius: 15px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  h3 {
    font-size: 1.3rem;
    color: #6c63ff;
    margin-bottom: 10px;
  }
  p {
    font-size: 0.95rem;
    color: #c7c7c7;
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 15px;
    padding-right: 5px;
    padding-bottom: 10px;
  }
  img {
    width: 95%;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  span {
    font-size: 0.8rem;
    color: #999;
  }
`;

export const SmallBlogCard = styled.div`
  background-color: #383757;
  padding: 20px;
  margin: 10px;
  width: 400px;
  height: 160px;
  overflow: hidden;
  border-radius: 15px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
  h3 {
    font-size: 1.3rem;
    color: #6c63ff;
    margin-bottom: 10px;
  }
  p {
    font-size: 0.95rem;
    color: #c7c7c7;
    flex-grow: 1;
    margin-bottom: 15px;
    padding-right: 5px;
    padding-bottom: 10px;
    text-align: left;
  }
  img {
    width: 95%;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  span {
    font-size: 0.8rem;
    color: #999;
  }
`;
