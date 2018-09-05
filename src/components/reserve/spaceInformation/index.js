import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import './sp-info-styles.css';

export default function space(props) {
  return (
    <React.Fragment>
      <ListGroup>
        <ListGroupItem>Code {props.space.code}</ListGroupItem>
        <ListGroupItem>
          Available: {props.space.available ? "Yes" : "No"}
        </ListGroupItem>
      </ListGroup>
    </React.Fragment>
  );
}
