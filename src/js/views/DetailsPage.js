import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id, type } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
      const data = await response.json();
      setDetails(data.result.properties);
    };

    fetchDetails();
  }, [id, type]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{details.name}</h1>
      <p><strong>Height:</strong> {details.height}</p>
      <p><strong>Mass:</strong> {details.mass}</p>
      
    </div>
  );
};

export default DetailsPage;
