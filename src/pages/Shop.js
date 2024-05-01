import React, { useEffect, useState } from "react";
import { Col, Container, Row, ToastContainer } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { Get_All_Product } from "../utilities/services/ProductService";
import ReactPaginate from "react-paginate";
import Footer from "../pages/Footer";

import StaticTesla1 from "../Image_webp/StaticTesla1.webp";
import StaticTesla2 from "../Image_webp/StaticTesla2.webp";
import StaticTesla3 from "../Image_webp/StaticTesla3.webp";
import StaticTesla4 from "../Image_webp/StaticTesla4.webp";

import "../css/Shop.css";
import { useTranslation } from "react-i18next";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const imagePerPages = 24;
  const startIndex = currentPage * imagePerPages;
  const endIndex = startIndex + imagePerPages;

  const PageChange = (event) => {
    setCurrentPage(event.selected);
  };

  useEffect(() => {
    Get_All_Product()
      .then((response) => {
        setProducts(response);
        setTotalPages(Math.ceil(response.length / imagePerPages));
      })
      .catch((err) => console.error(err));
  }, []);
  console.log("Here are all products :", products);
  // sort product by id
  products.sort((a, b) => b.id - a.id);

  const { t } = useTranslation();

  const subset = products.slice(startIndex, endIndex);
  const dataRows = Math.ceil(products.length / imagePerPages);
  return (
    <>
      <Container fluid style={{ marginTop: "10%" }}>
        <section className="px-2">
          <h4
            className="fw-bolder border-style"
          // style={{ borderColor: "#7240c8" }}
          >
            {t("shop_1")}
          </h4>
          <div className="mt-5 fs-4">{t("shop_2")}</div>
        </section>
        <Container fluid>
          <Row className="g-4">
            <Col
              lg={3}
              md={6}
              sm={9}
              className="d-flex justify-content-center mt-5"
            >
              <div className="w-100">
                <img src={StaticTesla1} className="d-block w-100" alt="kampuchea tesla kampuchea khmer product how it work" />
              </div>
            </Col>
            <Col
              lg={3}
              md={6}
              sm={9}
              className="d-flex justify-content-center mt-5"
            >
              <div className="w-100">
                <img src={StaticTesla2} className="d-block w-100" alt="kampuchea tesla kampuchea khmer product how it work" />
              </div>
            </Col>
            <Col
              lg={3}
              md={6}
              sm={9}
              className="d-flex justify-content-center mt-5"
            >
              <div className="w-100">
                <img src={StaticTesla3} className="d-block w-100" alt="kampuchea tesla kampuchea khmer product how it work" />
              </div>
            </Col>
            <Col
              lg={3}
              md={6}
              sm={9}
              className="d-flex justify-content-center mt-5"
            >
              <div className="w-100">
                <img src={StaticTesla4} className="d-block w-100" alt="kampuchea tesla kampuchea khmer product how it work" />
              </div>
            </Col>
          </Row>
        </Container>
        <Row className="g-4">
          {subset.map((product) => (
            <Col
              lg={3}
              md={6}
              sm={9}
              className="d-flex justify-content-center mt-5"
              key={product.id}
            >
              <ProductCard productdata={product} />
            </Col>
          ))}
          <ToastContainer />
          {dataRows > 1 && (
            <div className="px-4 mt-3 d-flex justify-content-start">
              <ReactPaginate
                nextLabel="Next"
                previousLabel="Previous"
                breakLabel="..."
                onPageChange={PageChange}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                pageCount={totalPages}
                renderOnZeroPageCount={null}
                o
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
          )}
        </Row>
      </Container>
      <div style={{ marginTop: "15%" }}>
        <Footer />
      </div>
    </>
  );
};

export default Shop;
