import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
import "../../styles/components/BlogForm.css";

const BlogForm = (props) => {
  const validationSchema = Yup.object().shape({
    blogTitle: Yup.string().required("Required"),
    author: Yup.string().required("Required"),
    lastUpdated: Yup.number()
      .positive("Date must be positive")
      .integer("Date must be an integer")
      .required("Required"),
    blogText: Yup.string().required("Required"),
  });

  console.log(props);

  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <div className="form-group">
            <label>Title</label>
            <Field name="blogTitle" type="text" className="form-control" />
            <ErrorMessage
              name="blogTitle"
              className="d-block invalid-feedback"
              component="span"
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <Field name="author" type="text" className="form-control" />
            <ErrorMessage
              name="author"
              className="d-block invalid-feedback"
              component="span"
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <Field name="lastUpdated" type="number" className="form-control" />
            <ErrorMessage
              name="lastUpdated"
              className="d-block invalid-feedback"
              component="span"
            />
          </div>
          <div className="form-group">
            <label>Text</label>
            <Field name="blogText" type="text" className="form-control" />
            <ErrorMessage
              name="blogText"
              className="d-block invalid-feedback"
              component="span"
            />
          </div>
          <Button
            variant="danger"
            size="lg"
            type="submit"
            className="submit-button"
          >
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BlogForm;
