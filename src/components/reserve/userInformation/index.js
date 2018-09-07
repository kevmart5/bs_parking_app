import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import './u-info-styles.css';

export default function user(props) {
  console.log(props);
  return (
    <React.Fragment>
      <p>To the next user: </p>
      <p>User name: <span className="assign-space__label-highlighted">{props.user.name} {props.user.lastName}</span> </p>
      <p>User email: <span className="assign-space__label-highlighted">{props.user.email}</span> </p>
    </React.Fragment>
  );
}