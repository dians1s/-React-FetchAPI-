import React from "react";

class PageTable extends React.Component {
    PreviousPage = () => {
        if (this.props.page > 1) {
            this.props.updatePage(this.props.page - 1)
        }
    }

    NextPage = () => {
        if ((this.props.users.slice((-1 + this.props.page + 1) * this.props.quantityMaxQuery, this.props.quantityMaxQuery * this.props.page + 1))?.length) {
            this.props.updatePage(this.props.page + 1)
        }
    }

    render() {
        return (<div className="div_buttons_under_table">
            <h3 className="text_dec">Выбор страницы</h3>
            <button className="buttons_under_table" onClick={this.PreviousPage}><h4 className="button_text">🡰</h4></button>
            <button className="buttons_under_table"><h4 className="button_text">{this.props.page}</h4></button>
            <button className="buttons_under_table" onClick={this.NextPage}><h4 className="button_text">🡲</h4></button>
        </div>
        )
    }
}


export default PageTable