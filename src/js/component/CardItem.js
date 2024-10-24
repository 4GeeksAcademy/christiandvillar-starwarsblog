import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'; // Asegúrate de que esta importación sea correcta

const CardItem = ({ item, type }) => {
    const { store, actions } = useContext(Context); // Obtén el store y las acciones del contexto
    const [imgLoaded, setImgLoaded] = useState(true); // Estado para manejar la carga de la imagen

    const isFavorite = (item) => {
        return store.favorites.some(fav => fav.uid === item.uid); // Verifica si el item está en favoritos
    };

    const handleImgError = () => {
        setImgLoaded(false); // Si la imagen falla al cargar, cambia el estado
    };

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img
                src={imgLoaded ? `https://starwars-visualguide.com/assets/img/${type === "vehicles" ? "starships" : type}/${item.uid}.jpg` : 'https://starwars-visualguide.com/assets/img/placeholder.jpg'}
                className="card-img-top"
                alt={item.name}
                onError={handleImgError} // Maneja el error de la imagen
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <button 
                    className="btn btn-link"
                    onClick={() => actions.toggleFavorite(item)} // Llama a toggleFavorite al hacer clic
                >
                    {isFavorite(item) ? (
                        <i className="fas fa-heart" style={{ color: 'red' }}></i> // Corazón lleno
                    ) : (
                        <i className="far fa-heart" style={{ color: 'gray' }}></i> // Corazón vacío
                    )}
                </button>
                <Link to={`/${type === "vehicles" ? "starships" : type}/${item.uid}`} className="btn btn-primary">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default CardItem;

