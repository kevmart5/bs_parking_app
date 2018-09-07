import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

import './sp-info-styles.css';

export default function space(props) {
  return (
    <React.Fragment>
      <h5>Parking assignation</h5>
      <div className="row">
        <div className="col-md-12">
          <p>You're assigning the space with: </p>
          <p>Code <span className="assign-space__label-highlighted">{props.space.code}</span> </p>
          <p>Available: <span className="assign-space__label-highlighted">{props.space.available ? "Yes" : "No"}</span></p>
        </div>
      </div>
    </React.Fragment>
  );
}
