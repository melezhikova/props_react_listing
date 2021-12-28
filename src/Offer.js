import React from "react";

class Offer extends React.Component {
    constructor (props) {
        super();
        this.listing_id = props.listing_id;
        this.url = props.url;
        this.MainImage = props.MainImage;
        this.title = props.title;
        this.currency_code = props.currency_code;
        this.price = props.price;
        this.quantity = props.quantity;
    }
}

export default Offer;