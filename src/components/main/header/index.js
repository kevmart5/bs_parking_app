import React from 'react';
import './main-header-styles.css';
import MainNavigation from '../mainNavigation/';
import MenuDropDown from '../mainNavigation/dropDown';

class HeaderMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ''
    }
  }

  async componentDidMount () {
    const user = await JSON.parse(localStorage.getItem('user'));
    this.setState({
      userName: `${user.name} ${user.lastName}`
    })
  }
  render () {
    return (
      <React.Fragment>
        <div className="main-header__background">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-end main-header__menu">
                  <MenuDropDown user={this.state.userName}/>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </React.Fragment>
    )
  }
}

export default HeaderMain;