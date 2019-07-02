import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { history, Role } from "./helpers";
import { authService } from "./services";
import { Home, Admin, Login, PrivateRoute } from "./components";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAdmin: false
    };
  }
  componentDidMount() {
    authService.currentUser.subscribe(observer =>
      this.setState({
        currentUser: observer,
        isAdmin: observer && observer.role === Role.Admin
      })
    );
  }
  logout() {
    authService.logout();
    history.push("/login");
  }
  render() {
    const { currentUser, isAdmin } = this.state;
    return (
      <Router history={history}>
        <div>
          {currentUser && (
            <nav className="navbar navbar-extend navbar-dark bg-dark">
              <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                {isAdmin && (
                  <Link to="/admin" className="nav-item nav-link">
                    Admin
                  </Link>
                )}
                <a onClick={this.logout} className="nav-item nav-link">
                  Logout
                </a>
              </div>
            </nav>
          )}
          <div className="jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <PrivateRoute exact path="/" component={Home} />
                  <PrivateRoute
                    path="/admin"
                    roles={[Role.Admin]}
                    component={Admin}
                  />
                  <Route path="/login" component={Login} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
