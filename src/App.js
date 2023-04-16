// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./styles/App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import other React Component
import CreateBlog from "./components/blog/create-blog.component";
import EditBlog from "./components/blog/edit-blog.component";
import BlogList from "./components/blog/blog-list.component";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/create-blog">Brady's Blogs</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link href="/create-blog" className="nav-link">
                Create Blog
              </Nav.Link>
              <Nav.Link href="/blog-list" className="nav-link">
                Blog List
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<CreateBlog />} />
                  <Route path="/create-blog" element={<CreateBlog />} />
                  <Route path="/edit-blog/:id" element={<EditBlog />} />
                  <Route path="/blog-list" element={<BlogList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
