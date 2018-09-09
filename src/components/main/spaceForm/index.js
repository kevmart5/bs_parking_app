import React from "react";
import { Field, reduxForm } from "redux-form";
import DateInputElement from './datePicker';

class SpaceForm extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="lastName" className="signUp__form-label">
            Space code
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="SpaceCode"
              value={this.props.spaceCode || ""}
              disabled={true}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="signUp__form-label">
            Initial date
          </label>
          <div>
            <DateInputElement 
              dateTime={'Initial date'} 
              handleDayClick={this.props.initialDayClick}
              day={this.props.initialDate}/>
          </div>
        </div>

        <div className="form-group">
          <label className="signUp__form-label">
            Final date
          </label>
          <div>
            <DateInputElement 
            dateTime={'Final date'} 
            handleDayClick={this.props.finalDayClick}
            day={this.props.finalDate}/>
          </div>
        </div>
        {
          this.props.isSetFree ? (
            <p>You already set free your parking space</p>
          ) : (
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={this.props.handleSubmit}>
              Save changes
            </button>
          )
        }

      </form>
    );
  }
}


SpaceForm = reduxForm({
  form: "space"
})(SpaceForm);

export default SpaceForm;
