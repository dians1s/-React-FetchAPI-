import React from "react";
import User from "./User";

class Users extends React.Component {
    render() {
        if (this.props.users?.length)
            return (<table>
                <thead>
                    <tr>
                        <th className="sorting_th" onClick={() => this.props.sortUsers('fullname')}>ФИО</th>
                        <th className="sorting_th" onClick={() => this.props.sortUsers('age')}>Возраст</th>
                        <th className="sorting_th" onClick={() => this.props.sortUsers('gender')}>Пол</th>
                        <th>Номер телефона</th>
                        <th className="sorting_th" onClick={() => this.props.sortUsers('address')}>Адрес</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.slice((-1 + this.props.page) * this.props.quantityMaxQuery, this.props.quantityMaxQuery * this.props.page).map((el) => (
                        <User key={el.id} user={el} />
                    ))}
                </tbody>
            </table>)
        return (
            <div>
                <h3>Пользователей нет</h3>
            </div>
        )
    }
}


export default Users