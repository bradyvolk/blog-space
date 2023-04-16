import React, { useState } from "react";
import axios from "axios";
import BlogForm from "./BlogForm";

const CreateBlog = () => {
  const [formValues] = useState({
    blogTitle: "",
    author: "",
    lastUpdated: "",
    blogText: "",
  });

  const onSubmit = (blogObject) => {
    axios
      .post("http://localhost:4000/blogs/create-blog", blogObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Blog successfully created");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <BlogForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Create Blog
    </BlogForm>
  );
};

export default CreateBlog;
