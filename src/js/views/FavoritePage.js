import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import CardItem from '../component/CardItem';
import { useNavigate } from 'react-router-dom';

const FavoritesPage = () => {
    const { store } = useContext(Context);
    const { favorites } = store;
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Your Favorites</h1>
            <button className="btn btn-secondary mb-3" onClick={() => navigate('/')}>
                Volver a Home
            </button>
            <div className="d-flex flex-wrap">
                {favorites.length > 0 ? (
                    favorites.map(item => (
                        <CardItem key={`${item.uid}-${item.type}`} item={item} type={item.type} />
                    ))
                ) : (
                    <p>No favorites yet.</p>
                )}
            </div>
        </div>
    );
};

export default FavoritesPage;
