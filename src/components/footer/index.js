import React from "react";
import "./footer-styles.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="footer__container">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
