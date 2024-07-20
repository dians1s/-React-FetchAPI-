import React from "react";

class User extends React.Component {
    render() {
        return (<tr>
            <td>{this.props.user.maidenName} {this.props.user.firstName} {this.props.user.lastName}</td>
            <td>{this.props.user.age}</td>
            <td>{this.props.user.gender}</td>
            <td>{this.props.user.phone}</td>
            <td>{this.props.user.address.city}, {this.props.user.address.address}</td>
        </tr>
        )
    }
}

export default User