const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            favorites: [], // Aquí almacenamos los favoritos
        },
        actions: {
            // Cargar personajes desde la API
            loadPeople: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people");
                    const data = await response.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.error("Error fetching people:", error);
                }
            },

            // Cargar vehículos desde la API
            loadVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/starships");
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error fetching starships:", error);
                }
            },

            // Cargar planetas desde la API
            loadPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets");
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

            // Agregar o quitar un elemento de favoritos
            toggleFavorite: (item) => {
                const store = getStore();
                const favorites = store.favorites;

                // Verifica si el ítem ya está en favoritos comparando uid y type
                const exists = favorites.some(fav => fav.uid === item.uid && fav.type === item.type);

                if (exists) {
                    // Si el ítem ya está en favoritos, lo quitamos
                    setStore({ favorites: favorites.filter(fav => !(fav.uid === item.uid && fav.type === item.type)) });
                } else {
                    // Si no está en favoritos, lo agregamos
                    setStore({ favorites: [...favorites, { uid: item.uid, type: item.type }] });
                }
            },
        }
    };
};

export default getState;
