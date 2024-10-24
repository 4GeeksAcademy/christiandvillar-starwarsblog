import React, { useContext } from 'react';
import { StoreContext } from '../context/Store';
import CardItem from '../components/CardItem';

const FavoritesPage = () => {
  const { favorites } = useContext(StoreContext);

  return (
    <div className="container">
      <h1>Your Favorites</h1>
      <div className="d-flex flex-wrap">
        {favorites.length > 0 ? (
          favorites.map(item => (
            <CardItem key={item.uid} item={item} type={item.type} />
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
