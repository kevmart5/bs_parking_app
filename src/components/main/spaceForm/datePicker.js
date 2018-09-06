import React from "react";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class DateInputElement extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedDay: this.props.day || undefined
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.day !== prevProps.day) {
      this.setState({selectedDay: this.props.day});
      sessionStorage.setItem(`${this.props.dateTime}`, (this.props.day));
    }
  }

  render() {
    return (
      <React.Fragment>
        <DayPicker
          onDayClick={this.props.handleDayClick}
          selectedDays={this.state.selectedDay}
        />
        <div>
        {this.state.selectedDay ? (
          <p>{this.props.dateTime}: {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          ''
        )}
        </div>
      </React.Fragment>
    )
  }
}