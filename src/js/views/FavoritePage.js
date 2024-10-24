import React, { useContext } from 'react';
import { Context } from '../store/appContext'; // Asegúrate de que esta importación sea correcta
import CardItem from '../component/CardItem';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const FavoritesPage = () => {
  const { store } = useContext(Context); // Usa 'store' para acceder a los datos
  const { favorites } = store; // Accede a los favoritos desde el store
  const navigate = useNavigate(); // Crea la función de navegación

  return (
    <div className="container">
      <h1>Your Favorites</h1>
      <button className="btn btn-secondary mb-3" onClick={() => navigate('/')}>
        Volver a Home
      </button>
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

