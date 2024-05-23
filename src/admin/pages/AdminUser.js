import React, { useEffect, useState } from "react";

import "../../interface/css/AdminUser.css";
import {
  Button,
  Container,
  Table,
  Form,
  ToastContainer,
  Row,
  Col,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import {
  Delete_User,
  Get_All_User,
} from "../../interface/utilities/services/UserService";
import Footer from "../../interface/pages/Footer";
import { toast } from "react-toastify";
// import Sidebar from "../global/Sidebar";
import {
  faBagShopping,
  faBell,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../global/Sidebar";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const imagePerPages = 10;
  const startIndex = currentPage * imagePerPages;
  const endIndex = startIndex + imagePerPages;

  const [searchUsers, setSearchUsers] = useState("");

  useEffect(() => {
    Get_All_User()
      .then((res) => {
        setUsers(res);
        setLoading(false);
        setTotalPages(Math.ceil(res.length / imagePerPages));
      })
      .catch((err) => console.error(err));
  }, []);

  users.sort((a, b) => b.id - a.id);

  const PageChange = (event) => {
    setCurrentPage(event.selected);
  };

  const DeleteUser = (e, id) => {
    e.preventDefault();
    setLoading(true);
    Delete_User(id)
      .then((res) => {
        setLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err);
      });
  };

  const subset = users.slice(startIndex, endIndex);

  return (
    <>
      <div className="d-flex justify-content-between body-style">
        <div>
          <Sidebar />
        </div>
        <Container fluid className="p-3">
          <Row className="pt-3 d-flex align-items-center">
            <Col md={6}>
              <h1 style={{ color: "#f9f9f9", fontWeight: "bolder" }}>User</h1>
              <p style={{ color: "#399780", fontWeight: "bold" }}>
                Welcome to your user information
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end gap-4 p-4">
              <Link to="#" className="icon-size">
                <FontAwesomeIcon icon={faBagShopping} />
              </Link>
              <Link to="#" className="icon-size">
                <FontAwesomeIcon icon={faBell} />
              </Link>
              <Link to="#" className="icon-size">
                <FontAwesomeIcon icon={faGear} />
              </Link>
              <Link to="/" className="icon-size">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </Link>
            </Col>
            <div className="mt-5">
              <Link to="/insertusers" className="btn btn-secondary mb-3">
                Create User
              </Link>
            </div>
            <Row className="mt-3 mb-5">
              <Col md={4}>
                <Form>
                  <Form.Control
                    type="search"
                    placeholder="Search Name..."
                    aria-label="Search"
                    onChange={(e) => setSearchUsers(e.target.value)}
                  />
                </Form>
              </Col>
            </Row>
            <Table responsive>
              <thead className="table-style">
                <tr>
                  <th>ID</th>
                  <th className="px-5">Photo</th>
                  <th className="px-5">Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {subset
                  .filter((user) => {
                    return searchUsers.toLowerCase() === ""
                      ? user
                      : user.name.toLowerCase().includes(searchUsers);
                  })
                  .map((user) => (
                    <tr key={user.id}>
                      <td className="pt-5">{user.id}</td>
                      <td style={{ width: "20px", paddingLeft: "45px" }}>
                        <Link to={`/viewprofile/${user.id}`}>
                          <div
                            className="object-fit-contain img-fluid"
                            // style={{ backgroundColor: "transparent" }}
                          >
                            <img
                              src={user.avatar}
                              alt="..."
                              className="img-style"
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src =
                                  "https://www.bevi.com/static/files/0/ecommerce-default-product.png";
                              }}
                            />
                          </div>
                        </Link>
                      </td>
                      <td className="pt-5 px-5">{user.name}</td>
                      <td className="pt-5">{user.role}</td>
                      <td className="pt-5">
                        {/* {user.email.split("@").slice(0, 1).join("")} */}
                        {user.email}
                        <span>
                          <br />
                        </span>
                      </td>
                      <td className="pt-5">{user.password}</td>
                      <td>
                        <Button
                          variant="none"
                          className="button-style-delete"
                          onClick={(e) => DeleteUser(e, user.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            <div className="mt-3 d-flex justify-content-start">
              <ReactPaginate
                nextLabel="Next"
                previousLabel="Previous"
                breakLabel="..."
                onPageChange={PageChange}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                pageCount={totalPages}
                renderOnZeroPageCount={null}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}
              />
              <ToastContainer />
            </div>
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AdminUser;
