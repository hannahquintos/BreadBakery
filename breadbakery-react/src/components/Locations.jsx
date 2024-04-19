import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getAllLocations = async () => {
      let response = await fetch("http://localhost:3000/api/locations");
      let data = await response.json();
      setLocations(data);
    }
    getAllLocations();
  }, []);

  return (
    <div id="locationCardsContainer">
        {
          locations.map((location) => (
            <div key={location._id} className="locationCard">
                <h2 id="location">{location.city}</h2>
                <p>{location.address}</p>
                <p>{location.postalCode}</p>
            </div>
          ))
        }
    </div>
  );
}