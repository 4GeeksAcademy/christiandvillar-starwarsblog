import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CharacterDetails = () => {
    const { id } = useParams(); // Obtén el id desde la URL
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        // Hacemos fetch a la API de SWAPI usando el ID que obtenemos de la URL
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then(response => response.json())
            .then(data => {
                setCharacter(data.result.properties); // Guardamos los detalles del personaje
            })
            .catch(error => console.error("Error fetching character details:", error));
    }, [id]);

    if (!character) {
        return <div>Loading...</div>; // Mostrar mientras se cargan los detalles
    }

    return (
        <div className="container">
            <h1>{character.name}</h1>
            <ul>
                <li><strong>Altura:</strong> {character.height}</li>
                <li><strong>Peso:</strong> {character.mass}</li>
                <li><strong>Color de cabello:</strong> {character.hair_color}</li>
                <li><strong>Color de piel:</strong> {character.skin_color}</li>
                <li><strong>Color de ojos:</strong> {character.eye_color}</li>
                <li><strong>Año de nacimiento:</strong> {character.birth_year}</li>
                <li><strong>Género:</strong> {character.gender}</li>
            </ul>
        </div>
    );
};
