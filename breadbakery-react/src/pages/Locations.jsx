import LocationsList from "../components/Locations";

export default function Locations() {
    return(
      <>
        <h1>Find a Location Near You</h1>
        <div id="locationsContainer">
          <LocationsList />
          <img src="./src/assets/bakery-interior.jpeg" alt="Birds eye view of interior of a bakery." />
          {/* https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1200 */}
        </div>

      </>
    );
  }