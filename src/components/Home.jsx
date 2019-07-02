import React from "react";
import { userService, authService } from "../services";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: authService.currentUserValue,
      userFromApi: null
    };
  }
  componentDidMount() {
    const { currentUser } = this.state;
    userService
      .getById(currentUser.id)
      .then(userFromApi => this.setState({ userFromApi }));
  }
  render() {
    const { currentUser, userFromApi } = this.state;
    console.log("home", currentUser, userFromApi);
    return (
      <div>
        <h1>home</h1>
        <p>you're logged in</p>
        {/* <p></p> */}
        <div>
          currentUser from secure api end point:
          {userFromApi && (
            <ul>
              <li>
                {userFromApi.firstName} {userFromApi.lastName}
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}
