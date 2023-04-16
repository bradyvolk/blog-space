import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogTableRow = (props) => {
  const { _id, blogTitle, author, lastUpdated } = props.obj;

  const deleteBlog = () => {
    axios
      .delete("http://localhost:4000/blogs/delete-blog/" + _id)
      .then((res) => {
        if (res.status !== 200) {
          Promise.reject();
        }
        alert("Blog successfully deleted");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <tr>
      <td>{blogTitle}</td>
      <td>{author}</td>
      <td>{lastUpdated}</td>
      <td>
        <Link className="edit-link" to={"/edit-blog/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteBlog} size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default BlogTableRow;
