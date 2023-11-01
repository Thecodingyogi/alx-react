import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import "./App.css";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="heading-section">
            <Notifications listNotifications={this.listNotifications} />
            <Header />
          </div>
          {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

App.propType = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

export default App;
