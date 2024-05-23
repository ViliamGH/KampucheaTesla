import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  Area,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  LineChart,
} from "recharts";
import Sidebar from "../global/Sidebar";
import "../css/AdminDashboard.css";
import Footer from "../../interface/pages/Footer";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBell,
  faChartColumn,
  faChartGantt,
  faChartLine,
  faChartPie,
  faDownload,
  faGear,
  faRightFromBracket,
  faUser,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { faDotCircle } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const AdminDashBoard = () => {
  const data = [
    {
      name: "Turbos",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Exchausts",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "NOS",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Spoilers",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Hood",
      uv: 590,
      pv: 3800,
    },
    {
      name: "Wheels",
      uv: 2390,
      pv: 500,
    },
    {
      name: "Mirrors",
      uv: 2390,
      pv: 500,
    },
  ];

  const data2 = [
    {
      name: "Exchausts",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "NOS",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Spoilers",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "Hood",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Wheels",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Mirrors",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  const data3 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const data4 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
  ];

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
                DashBoard
              </h1>
              <p style={{ color: "#399780", fontWeight: "bold" }}>
                Welcome to your DashBoard
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end gap-4 p-4 px-5">
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
            <Row className="pt-5">
              <Col lg={6}>
                <Card
                  style={{ backgroundColor: "#232939" }}
                  className="p-3 mb-3"
                >
                  <Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="card-color fs-2">600</div>
                      <span className="card-main">
                        <FontAwesomeIcon icon={faChartLine} />
                      </span>
                    </div>
                    <p className="card-color mt-3">product</p>
                    <div className="mt-5">
                      <ProgressBar now={60} />
                      <p className="card-color mt-3">60%</p>
                    </div>
                  </Card.Title>
                </Card>
              </Col>
              <Col lg={6}>
                <Card
                  style={{ backgroundColor: "#232939" }}
                  className="p-3 mb-3"
                >
                  <Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="card-color fs-2">400</div>
                      <span className="card-main">
                        <FontAwesomeIcon icon={faChartGantt} />
                      </span>
                    </div>
                    <p className="card-color mt-3">user</p>
                    <div className="mt-5">
                      <ProgressBar now={40} />
                      <p className="card-color mt-3">40%</p>
                    </div>
                  </Card.Title>
                </Card>
              </Col>
              <Col lg={6}>
                <Card
                  style={{ backgroundColor: "#232939" }}
                  className="p-3 mb-3"
                >
                  <Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="card-color fs-2">350</div>
                      <span className="card-main">
                        <FontAwesomeIcon icon={faChartPie} />
                      </span>
                    </div>
                    <p className="card-color mt-3">message</p>
                    <div className="mt-5">
                      <ProgressBar now={35} />
                      <p className="card-color mt-3">35%</p>
                    </div>
                  </Card.Title>
                </Card>
              </Col>
              <Col lg={6}>
                <Card
                  style={{ backgroundColor: "#232939" }}
                  className="p-3 mb-3"
                >
                  <Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="card-color fs-2">900</div>
                      <span className="card-main">
                        <FontAwesomeIcon icon={faChartColumn} />
                      </span>
                    </div>
                    <p className="card-color mt-3">category</p>
                    <div className="mt-5">
                      <ProgressBar now={90} />
                      <p className="card-color mt-3">90%</p>
                    </div>
                  </Card.Title>
                </Card>
              </Col>
            </Row>

            {/* Charts ... */}
            <Row>
              <Col md={12}>
                <main className="chart-style">
                  <section className="d-flex justify-content-between">
                    <div
                      className="mb-5"
                      style={{
                        color: "#f9f9f9",
                      }}
                    >
                      Revenue Generated
                      <br />
                      <span style={{ color: "#3db193ff" }}>$ 559.39</span>
                    </div>
                    <div
                      style={{
                        color: "#3db193ff",
                        fontSize: "25px",
                      }}
                    >
                      <FontAwesomeIcon icon={faDownload} />
                    </div>
                  </section>
                  <div style={{ width: "100%", height: 500 }}>
                    <ResponsiveContainer>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="pv"
                          stroke="#8884d8"
                          activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </main>
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col xxl={5}>
                <main className="chart-style mt-5">
                  <section className="d-flex justify-content-between">
                    <div
                      className="px-4 p-3"
                      style={{
                        color: "#f9f9f9",
                      }}
                    >
                      Campaign
                    </div>
                  </section>
                  <div style={{ width: "100%", height: 500 }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={data3}
                          dataKey="value"
                          cx="50%"
                          cy="50%"
                          outerRadius={60}
                          fill="#8884d8"
                        />
                        <Pie
                          data={data4}
                          dataKey="value"
                          cx="50%"
                          cy="50%"
                          innerRadius={70}
                          outerRadius={90}
                          fill="#82ca9d"
                          label
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-center">
                    <p style={{ color: "#3db193ff" }}>
                      $ 784 revenue <br />
                      <span style={{ color: "#f9f9f9" }}>
                        Includes extra misc expenditures and costs{" "}
                      </span>
                    </p>
                  </div>
                </main>
              </Col>

              {/* ssecond chart */}
              <Col xxl={7}>
                <main className="chart-style mt-5">
                  <section className="d-flex justify-content-between">
                    <div
                      className="p-5"
                      style={{
                        color: "#f9f9f9",
                      }}
                    >
                      Sales Quantity
                    </div>
                  </section>
                  <div
                    style={{
                      width: "100%",
                      height: 500,
                    }}
                  >
                    <ResponsiveContainer>
                      <ComposedChart data={data2}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="amt"
                          fill="#8884d8"
                          stroke="#8884d8"
                        />
                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </main>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default AdminDashBoard;
