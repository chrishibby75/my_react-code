import React, { Component } from "react";
import User from "../User/User";
import styles from "./Users.module.css";

class Users extends Component {
    constructor() {
        super();
        this.state = {
            showUsers: true,
            more: "Test"
        };
    }

    componentDidUpdate() {
        if (this.props.users.length === 0) {
            throw new Error("No Users Provided!");
        }
    }

    toggleUsersHandler() {
        this.setState(curState => {
            return {showUsers: !curState.showUsers}
        });
    }

    render() {
        return (
            <div className={styles.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? "Hide" : "Show"} Users
                </button>
                {this.state.showUsers && <ul>
                    {this.props.users.map(user => (
                        <User 
                            key={user.id}
                            name={user.name}
                        />
                    ))}
                </ul>}
            </div>
        );
    };
};

// const Users = () => {
//     const [showUsers, setShowUsers] = useState(true);

//     const toggUsersHandler = () => {
//         setShowUsers(curState => !curState);
//     };

//     return (
//         <div className={styles.users}>
//             <button onClick={toggUsersHandler}>
//                 {showUsers ? "Hide" : "Show"} Users
//             </button>
//             {showUsers && <ul>
//                 {DUMMY_USERS.map(user => (
//                     <User 
//                         key={user.id}
//                         name={user.name}
//                     />
//                 ))}
//             </ul>}
//         </div>
//     );
// };

export default Users;