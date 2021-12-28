import PropTypes from "prop-types";
import ListingItem from "./ListingItem";

export default function Listing (props) {
    const { items } = props;
    const listItems = items.map(item => 
        <ListingItem key={item.listing_id} item={item}/>)
    
    return (
        <div className="item-list">{listItems}</div>
    )
}


Listing.propTypes = {
    items: PropTypes.array
}

Listing.defaultProps = {
    items: []
};