import React from "react";


class SearchInTable extends React.Component {
    FetchingAdd = (fetchUrl) => {
        fetch(fetchUrl)
            .then(res => res.json())
            .then(data => {
                if (data.total) {
                    this.props.addUsers(data.users)
                }
            })
            .catch(error => console.error("Ошибка при загрузке данных из .json:", error));
    }

    Search = (e) => {
        let target = e.target.value
        console.log()
        if (!target) {
            fetch("https://dummyjson.com/users?limit=0")
                .then(res => res.json())
                .then(data => this.props.updateUsers(data.users))
                .catch(error => console.error("Ошибка при загрузке данных из .json:", error));
        }
        else {
            let queryList = [
                'https://dummyjson.com/users/filter?key=maidenName&value=' + target.charAt(0).toUpperCase() + target.slice(1).toLowerCase(),
                'https://dummyjson.com/users/filter?key=firstName&value=' + target.charAt(0).toUpperCase() + target.slice(1).toLowerCase(),
                'https://dummyjson.com/users/filter?key=lastName&value=' + target.charAt(0).toUpperCase() + target.slice(1).toLowerCase(),
                'https://dummyjson.com/users/filter?key=age&value=' + target,
                'https://dummyjson.com/users/filter?key=gender&value=' + target.toLowerCase(),
                'https://dummyjson.com/users/filter?key=phone&value=' + target,
                'https://dummyjson.com/users/filter?key=address.city&value=' + target,
                'https://dummyjson.com/users/filter?key=address.address&value=' + target
            ]
            this.setState({ search: target })
            fetch(queryList[0])
                .then(res => res.json())
                .then(data => this.props.updateUsers(data.users))
                .catch(error => console.error("Ошибка при загрузке данных из .json:", error));
            for (let i = 1; i < 8; i++) {
                this.FetchingAdd(queryList[i])
            }
        }
    }

    render() {
        return (
            <input className="search" placeholder="Поиск" value={this.props.search} onChange={this.Search} />
        )
    }
}


export default SearchInTable