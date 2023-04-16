import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import BlogForm from "./BlogForm";

const EditBlog = (props) => {
  const [formValues, setFormValues] = useState({
    blogTitle: "",
    author: "",
    lastUpdated: "",
    blogText: "",
  });

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/blogs/update-blog/${id}`)
      .then((res) => {
        const { blogTitle, author, lastUpdated, blogText } = res.data;
        setFormValues({ blogTitle, author, lastUpdated, blogText });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const onSubmit = (blogObject) => {
    axios
      .put(`http://localhost:4000/blogs/update-blog/${id}`, blogObject)
      .then((res) => {
        if (res.status !== 200) {
          Promise.reject();
        }
        alert("Blog successfully updated");
        navigate("/blog-list");
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log(err);
      });
  };

  return (
    <BlogForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Update Blog
    </BlogForm>
  );
};

export default EditBlog;
