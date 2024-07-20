import React from "react";

class QuantityQuery extends React.Component {
    render() {
        return (<>
            <div className="div_buttons_under_table">
                <h3 className="text_dec">Количество строк</h3>
                <button className="buttons_under_table" onClick={() => this.props.updateQuantity(30)}><h4 className="button_text">30</h4></button>
                <button className="buttons_under_table" onClick={() => this.props.updateQuantity(60)}><h4 className="button_text">60</h4></button>
                <button className="buttons_under_table" onClick={() => this.props.updateQuantity(90)}><h4 className="button_text">90</h4></button>
            </div>
        </>
        )
    }
}


export default QuantityQuery