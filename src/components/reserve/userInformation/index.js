import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import './u-info-styles.css';

export default function user(props) {
  console.log(props);
  return (
    <React.Fragment>
      <ListGroup>
        <ListGroupItem>Name: {props.user.name} {props.user.lastName}</ListGroupItem>
        <ListGroupItem>
          Email: {props.user.email}
        </ListGroupItem>
      </ListGroup>
    </React.Fragment>
  );
}