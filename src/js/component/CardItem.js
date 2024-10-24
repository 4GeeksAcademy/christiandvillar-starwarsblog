import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ item, type }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`}
                className="card-img-top"
                alt={item.name}
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <Link to={`/${type}/${item.uid}`} className="btn btn-primary">Details</Link>
            </div>
        </div>
    );
};

export default CardItem;