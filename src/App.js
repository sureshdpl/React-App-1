import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Login from './Componet/Login';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginInfo: ''
    };
  }

  // login = (loginInfo) => {
  //   // if(loginInfo && loginInfo.googleId)
  //   console.log(loginInfo);
  //   this.setState({
  //     loginInfo: loginInfo
  //   })
  //   console.log(this.state.loginInfo);
  // }

  render() {
    return (
      <div>
        {this.props.loginInfo && this.props.loginInfo.loginType ?
        "Welcome "+ this.props.loginInfo.data.userName +", Your logged in with " + this.props.loginInfo.loginType 
        :       
        <Login/>
        }
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    loginInfo: state.loginInfo
  }
}
export default connect(mapStateToProps,null)(App);
