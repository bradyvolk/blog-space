import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import BlogTableRow from "./BlogTableRow";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/blogs/")
      .then(({ data }) => setBlogs(data))
      .catch((err) => console.log(err));
  }, []);

  const DataTable = () => {
    return blogs.map((res, i) => {
      return <BlogTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped hover>
        <thead>
          <tr>
            <td>Title</td>
            <td>Author</td>
            <td>Last Updated</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default BlogList;
