import PropTypes from "prop-types";
import Offer from "./Offer";

export default function ListingItem (props) {
    const { url, MainImage, title, currency_code, price, quantity } = props.item;

    if ( !MainImage || !price) return null;

    let correctTitle = title;
    if (correctTitle && title.length > 50) {
        correctTitle = `${title.substring(0,49)}...`;
    }

    let cost;
    switch(currency_code) {
        case 'USD':
            cost = `$${price}`;
            break;
        case 'EUR':
            cost = `€${price}`;
            break;
    default:
        cost = `${price} ${currency_code}`;
    }

    let classQuantity = 'level-high';
    if (quantity < 21) {
        classQuantity = 'level-medium';
    } 
    if (quantity < 11) {
        classQuantity = 'level-low';
    }

    let imageUrl;
    if (MainImage) {
        imageUrl = MainImage.url_570xN;
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={`${imageUrl}`} alt='#'></img>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{correctTitle}</p>
                <p className="item-price">{cost}</p>
                <p className={`item-quantity ${classQuantity}`}>{`${quantity} left`}</p>
            </div>
        </div>
    )
   
  
}

ListingItem.propTypes = {
    item: PropTypes.instanceOf(Offer)
}

ListingItem.defaultProps = {
    item: null
};

