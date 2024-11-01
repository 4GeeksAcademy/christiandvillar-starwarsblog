import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext'; // Asegúrate de que esta importación sea correcta

const CardItem = ({ item, type }) => {
    const { store, actions } = useContext(Context); // Obtén el store y las acciones del contexto
    const [imgLoaded, setImgLoaded] = useState(true); // Estado para manejar la carga de la imagen
    const [isFav, setIsFav] = useState(() => store.favorites.some(fav => fav.uid === item.uid && fav.type === item.type)); // Estado local para favoritos

    // Manejar errores en la carga de imágenes
    const handleImgError = () => {
        setImgLoaded(false); // Cambia el estado si la imagen no se carga
    };

    // Función para alternar el estado de favorito
    const handleToggleFavorite = () => {
        // Mostrar en la consola qué ítem se está alternando
        console.log(`Toggling favorite for item: ${item.name} (UID: ${item.uid}, Type: ${type})`);
        
        actions.toggleFavorite({ uid: item.uid, type }); // Llama a la acción para alternar favoritos
        setIsFav(prev => !prev); // Alternar el estado local para reflejar el cambio
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
                    onClick={handleToggleFavorite} // Llama a la función para alternar favoritos
                >
                    {isFav ? ( // Usa el estado local para determinar el estado actual
                        <i className="fas fa-heart" style={{ color: 'red' }}></i> // Corazón lleno si es favorito
                    ) : (
                        <i className="far fa-heart" style={{ color: 'gray' }}></i> // Corazón vacío si no es favorito
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