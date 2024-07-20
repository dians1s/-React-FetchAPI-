import React from "react";
import Header from "./Header";
import Users from "./Users";
import PageTable from "./PageTable";
import QuantityQuery from "./QuantityQuery";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            search: '',
            page: 1,
            quantityMaxQuery: 30,
            sortColumn: '',
            sortOrder: ''
        }
    }

    componentDidMount() {
        fetch("https://dummyjson.com/users?limit=0")
            .then(res => res.json())
            .then(data => this.setState({ users: data.users }))
            .catch(error => console.error("Ошибка при загрузке данных из .json:", error));
    }

    updateUsers = (users) => {
        this.setState({ users })
    }

    addUsers = (plusUsers) => {
        let updatedUsers = [...this.state.users]
        plusUsers.forEach(user => {
            updatedUsers.push(user);
        });
        this.setState({ users: updatedUsers })
    }

    updatePage = (page) => {
        this.setState({ page })
    }

    updateQuantity = (quantityMaxQuery) => {
        this.setState({ quantityMaxQuery })
        if (quantityMaxQuery > this.state.quantityMaxQuery && this.state.page !== 1) {
            if (!(this.state.users.slice((-1 + this.state.page + 1) * this.state.quantityMaxQuery, this.state.quantityMaxQuery * this.state.page + 1))?.length) {
                console.log(!(this.state.users.slice((-1 + this.state.page + 1) * this.state.quantityMaxQuery, this.state.quantityMaxQuery * this.state.page + 1))?.length)
                this.updatePage(Math.ceil(this.state.users?.length / quantityMaxQuery))
            }
        }
    }

    sortUsers = (column) => {
        if (this.state.sortColumn && this.state.sortOrder === 'desc') {
            this.componentDidMount()
            this.setState({ sortColumn: '', sortOrder: '' });
        }
        else {
            let sortOrder = 'asc'
            if (this.state.sortColumn === column && this.state.sortOrder === 'asc') {
                sortOrder = 'desc'
            }
            let sortedUsers = [...this.state.users].sort((a, b) => {
                if (column === 'fullname') {
                    const fullNameA = a.maidenName + a.firstName + a.lastName;
                    const fullNameB = b.maidenName + b.firstName + b.lastName;
                    return sortOrder === 'asc' ? fullNameA.localeCompare(fullNameB) : fullNameB.localeCompare(fullNameA);
                }
                else if (column === 'age') {
                    return sortOrder === 'asc' ? a.age - b.age : b.age - a.age
                }
                else if (column === 'gender') {
                    return sortOrder === 'asc' ? a.gender.localeCompare(b.gender) : b.gender.localeCompare(a.gender)
                }
                else if (column === 'address') {
                    return sortOrder === 'asc' ? a.address.city.localeCompare(b.address.city) : b.address.city.localeCompare(a.address.city);
                }
                else return 0
            })
            this.setState({ users: sortedUsers, sortColumn: column, sortOrder })
        }
    }
    render() {
        return (<>
            <div className="table">
                <Header updateUsers={this.updateUsers} addUsers={this.addUsers} page={this.state.page} title="Список пользователей" />
                <Users users={this.state.users} page={this.state.page} quantityMaxQuery={this.state.quantityMaxQuery} sortUsers={this.sortUsers} />
                <PageTable users={this.state.users} page={this.state.page} updatePage={this.updatePage} quantityMaxQuery={this.state.quantityMaxQuery} />
                <QuantityQuery updateQuantity={this.updateQuantity} quantityMaxQuery={this.state.quantityMaxQuery} />
            </div>
        </>
        )
    }
}


export default App