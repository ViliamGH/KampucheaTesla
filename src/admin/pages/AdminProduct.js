import React, { useEffect, useState } from "react";
import "../../css/AdminProduct.css";
import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import {
  Delete_Product,
  Get_All_Product,
} from "../../utilities/services/ProductService";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import { Get_All_Category } from "../../utilities/services/CategorySerice";
import Footer from "../../pages/Footer";
import Sidebar from "../global/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBell,
  faGear,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const imagePerPages = 10;
  const startIndex = currentPage * imagePerPages;
  const endIndex = startIndex + imagePerPages;

  const [searchProduct, setSearchProduct] = useState("");

  useEffect(() => {
    Get_All_Category()
      .then((res) => {
        setCategory(res);
      })
      .catch((err) => console.error(err));
    Get_All_Product()
      .then((res) => {
        setProducts(res);
        setLoading(false);
        setTotalPages(Math.ceil(res.length / imagePerPages));
      })
      .catch((err) => console.error(err));
  }, []);

  products.sort((a, b) => b.id - a.id);

  const PageChange = (event) => {
    setCurrentPage(event.selected);
  };

  const subset = products.slice(startIndex, endIndex);

  const DeleteProduct = (e, id) => {
    e.preventDefault();
    setLoading(true);
    Delete_Product(id)
      .then((res) => {
        setLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between body-style">
        <div>
          <Sidebar />
        </div>
        <Container fluid className="p-3">
          <Row className="pt-3 d-flex align-items-center">
            <Col md={6}>
              <h1 style={{ color: "#f9f9f9", fontWeight: "bolder" }}>
                Product
              </h1>
              <p style={{ color: "#399780", fontWeight: "bold" }}>
                Welcome to your product information
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
            <div className="d-flex justify-content-between mt-5 mb-5">
              <div>
                <Link to="/insertusers" className="btn btn-secondary mb-3">
                  Create User
                </Link>
              </div>
              <div>
                <Form>
                  <Form.Control
                    type="search"
                    placeholder="Search Name..."
                    aria-label="Search"
                    onChange={(e) => setSearchProduct(e.target.value)}
                  />
                </Form>
              </div>
            </div>
            <Table responsive>
              <thead className="table-style">
                <tr>
                  <th>ID</th>
                  <th className="px-5">Photo</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {subset
                  .filter((pro) => {
                    return searchProduct.toLowerCase() === ""
                      ? pro
                      : pro.title.toLowerCase().includes(searchProduct);
                  })
                  .map((pro) => (
                    <tr key={pro.id}>
                      <td className="pt-5">{pro.id}</td>
                      <td style={{ width: "20px", paddingLeft: "45px" }}>
                        <Link to={`/viewproduct/${pro.id}`}>
                          <Carousel
                            className="object-fit-contain img-fluid"
                            // style={{ backgroundColor: "transparent" }}
                          >
                            {pro.images.map((image) => (
                              <Carousel.Item interval={2000}>
                                <img
                                  src={image}
                                  alt="..."
                                  className="img-style"
                                  onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src =
                                      "https://www.bevi.com/static/files/0/ecommerce-default-product.png";
                                  }}
                                />
                              </Carousel.Item>
                            ))}
                          </Carousel>
                        </Link>
                      </td>
                      <td className="pt-5">{pro.title}</td>
                      <td className="pt-5">{pro.category.name}</td>
                      <td className="pt-5">
                        {pro.description.split("").slice(0, 10).join("")}...
                      </td>
                      <td className="pt-5">{pro.price}$</td>
                      <td>
                        <Button
                          variant="none"
                          className="button-style-delete"
                          onClick={(e) => DeleteProduct(e, pro.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
            <div className="mt-3 d-flex justify-content-start p-0">
              <ReactPaginate
                nextLabel={"Next"}
                previousLabel={"Previous"}
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
            </div>
            <ToastContainer />
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AdminProduct;
