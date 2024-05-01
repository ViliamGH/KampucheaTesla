import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  FormLabel,
  FormSelect,
  Nav,
  NavLink,
  Navbar,
  Offcanvas,
  Row,
  Form,
} from "react-bootstrap";
import { Upload_File } from "../../utilities/services/FileUpload";
import {
  Get_All_User_By_Id,
  Update_User,
} from "../../utilities/services/UserService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import tesla from "../../Flag-Icons/LogoTesla/04_0x0-Tesla_Wordmark_10_White.png";

import "../../css/InsertProductAndProfile.css";
import { useTranslation } from "react-i18next";

const ViewProfile = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [selectFile, setSelectFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(false);
  };

  const { t, i18n } = useTranslation();

  const language = [
    { code: "en", name: "English" },
    { code: "kh", name: "ខ្មែរ" },
    { code: "ch", name: "中国" },
  ];

  let updateUser = {
    name,
    email,
    password,
    role,
  };

  console.log("Update users: ", updateUser);

  const { id } = useParams();
  const myNavigate = useNavigate();

  useEffect(() => {
    Get_All_User_By_Id(id)
      .then((res) => {
        setUser(res);
        setName(res.name);
        setEmail(res.email);
        setPassword(res.password);
        setImageURL(res.avatar);
        setRole(res.role);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleUpdate = (e) => {
    setLoading(true);
    e.preventDefault();
    if (selectFile) {
      const file = new FormData();
      file.append("file", selectFile);

      Upload_File(file)
        .then((response) => {
          updateUser.avatar = response.location;
          // update user with image by id
          Update_User(id, updateUser)
            .then((res) => {
              setLoading(false);
              toast.success(res);
              myNavigate("/adminuser");
            })
            .catch((err) => {
              // for (var i = 0; i < err.response.data.message.length; i++) {
              //   toast.error(err.response.data.message[i]);
              // }
              console.log(err.response.data.message);
              setLoading(false);
            });
        })
        .catch((err) => {
          // for (var i = 0; i < err.response.data.message.length; i++) {
          //   toast.error(err.response.data.message[i]);
          // }
          console.log(err.response.data.message);
          setLoading(false);
        });
    } else {
      // update user without image by id
      Update_User(id, updateUser)
        .then((res) => {
          setLoading(false);
          toast.success(res);
          myNavigate("/adminuser");
        })
        .catch((err) => {
          // for (var i = 0; i < err.response.data.message.length; i++) {
          //   toast.error(err.response.data.message[i]);
          // }
          console.log(err.response.data.message);
          setLoading(false);
        });
    }
  };

  const handleImageChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setImageURL(url);
    setSelectFile(e.target.files[0]);
  };

  return (
    <>
      <Navbar expand="md" fixed="top" className="p-3 top-nav-style">
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <Navbar.Brand>
              <Link to="/adminuser">
                <img
                  src={tesla}
                  alt="..."
                  style={{ width: "120px", cursor: "pointer" }}
                />
              </Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            id="nav-toggle-style-option"
            aria-controls="offcanvasNavbar"
            onClick={() => setShowMenu(true)}
          />
          <Navbar.Offcanvas
            className="nav-offcanvas-style"
            id="offcanvasNavbar"
            aria-labelledby={`offcanvFasNavbarLabel`}
            placement="start"
            show={showMenu}
            onHide={() => setShowMenu(false)}
          >
            <Offcanvas.Header
              closeButton
              closeVariant="white"
              style={{ borderBottom: "1px solid #CCC" }}
            >
              <Offcanvas.Title>
                <img
                  src={tesla}
                  alt="..."
                  style={{ width: "130px", cursor: "default" }}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav navbarScroll className="ms-auto px-3 nav-style">
                {/* {language.map((l) => (
                  <Nav
                    href="#"
                    eventKey={l.name}
                    onClick={() =>
                      handleMenuToggle(i18n.changeLanguage(l.code))
                    }
                  >
                    <NavLink className={"nav-link nav-style"}>
                      &nbsp; {l.name}
                    </NavLink>
                  </Nav>
                ))} */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Container className="p-5 mt-5 d-flex justify-content-center align-item-center">
        <Row className="d-flex justify-content-center">
          <h1 className="text-center fw-bolder mb-5">Profile Information</h1>
          <Col md={8}>
            <img
              src={
                imageURL
                  ? imageURL
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDHvxAjE2bfJbB-asv9kqio9ItBvUUwSHiA&usqp=CAU"
              }
              alt="..."
              className="m-0 object-fit-contain img-fluid img-thumbnail"
              width="100%"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://www.bevi.com/static/files/0/ecommerce-default-product.png";
              }}
            />
            <Form.Control type="file" onChange={handleImageChange} />
          </Col>
          <Row className="d-flex justify-content-center">
            <Col md={8} className=" mt-4">
              <div
                className="mb-4"
                style={{ borderTop: "2px solid #ccc" }}
              ></div>
              <Row>
                <Col>
                  <FormLabel className="mt-3 w-50">Name</FormLabel>
                  <FormControl
                    className="form-control-style"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                <Col>
                  <FormLabel className="mt-3">Role</FormLabel>
                  <FormSelect
                    className="form-control-style"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                  </FormSelect>
                </Col>
              </Row>

              <FormLabel className="mt-3">Email</FormLabel>
              <FormControl
                className="form-control-style"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormLabel className="mt-3">Password</FormLabel>
              <FormControl
                className="form-control-style"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="text-center mt-5">
                <Button
                  variant="success"
                  className="mt-3 w-100"
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              </div>
              <ToastContainer />
              {loading && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#BBBBBB80",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "cetner",
                  }}
                >
                  <RotatingLines
                    strokeColor="#47A992"
                    strokeWidth="5"
                    animationDuration="1"
                    width="90"
                    visible={true}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default ViewProfile;
