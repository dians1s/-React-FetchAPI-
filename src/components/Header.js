import React from "react";
import SearchInTable from "./SearchInTable";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="table_name"><h2>{this.props.title}</h2></div>
                <div className="table_search"><SearchInTable updateUsers={this.props.updateUsers} addUsers={this.props.addUsers} page={this.props.page} /></div>
            </header>
        )
    }
}


export default Header;