import React from "react";
import { userService } from "../services";

export class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    };
  }
  componentDidMount() {
    userService.getAll().then(users => this.setState({ users }));
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Admin</h1>
        {/* <p></p> */}
        <div>
          {users && (
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  {user.firstName} {user.lastName}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}
