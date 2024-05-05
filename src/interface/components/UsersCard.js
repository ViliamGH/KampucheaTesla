import React from "react";
import "../css/UserCard.css";

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UsersCard = ({ userdata }) => {
  return (
    <Card>
      <div className="image-hover-user">
        <a href="#">
          <Card.Img
            src={userdata.avatar}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://t4.ftcdn.net/jpg/02/17/34/67/360_F_217346796_TSg5VcYjsFxZtIDK6Qdctg3yqAapG7Xa.jpg";
            }}
            variant="top"
            className="img-fluid img-thumbnail"
            id="user-img"
          />
        </a>
      </div>
      <Card.Body>
        <div className="fw-bolder d-flex justify-content-between">
          <Card.Title>{userdata.name}</Card.Title>
          <Card.Title className="text-danger fw-bolder">{userdata.role}</Card.Title>
        </div>
        <Card.Text>
          <h5>{userdata.email} </h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nulla
          vero iure voluptatibus explicabo, quasi, in voluptatum perferendis
          dolores dicta culpa quisquam ad suscipit et, quidem ullam odit. Est,
          non!{" "}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Link to={`/viewprofile/${userdata.id}`}>
          <Button variant="primary">View</Button>
        </Link>
        <Button variant="warning">Update</Button>
      </Card.Footer>
    </Card>
  );
};

export default UsersCard;
