import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PlanetDetails = () => {
    const { id } = useParams(); // Obtener el ID de la URL
    const [planet, setPlanet] = useState(null); // Estado para almacenar los detalles del planeta

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/planets/${id}`) // Realiza la solicitud a la API
            .then(response => response.json())
            .then(data => {
                if (data.result) {
                    setPlanet(data.result.properties); // Almacena los detalles del planeta
                } else {
                    console.error("No se encontraron datos para el planeta con ID:", id);
                }
            })
            .catch(error => console.error("Error fetching planet details:", error));
    }, [id]);

    // Indicador de carga
    if (!planet) {
        return <div>Loading...</div>;
    }

    // Renderiza los detalles del planeta
    return (
        <div className="container">
            <h1>{planet.name}</h1>
            <ul>
                <li><strong>Diámetro:</strong> {planet.diameter}</li>
                <li><strong>Periodo de rotación:</strong> {planet.rotation_period}</li>
                <li><strong>Periodo orbital:</strong> {planet.orbital_period}</li>
                <li><strong>Gravedad:</strong> {planet.gravity}</li>
                <li><strong>Población:</strong> {planet.population}</li>
                <li><strong>Clima:</strong> {planet.climate}</li>
                <li><strong>Terreno:</strong> {planet.terrain}</li>
                <li><strong>Agua superficial:</strong> {planet.surface_water}</li>
            </ul>
        </div>
    );
};
