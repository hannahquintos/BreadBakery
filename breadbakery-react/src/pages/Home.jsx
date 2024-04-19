import { Link } from "react-router-dom";
// import UselessFact from "../components/UselessFact";

export default function Home() {
  return(
    <>
        <div id="hero">
            <img src="./src/assets/hero-image.png" alt="" id="heroImg"/>
            {/* https://unsplash.com/photos/bread-on-desk-kdS2opySO4s */}
            <div id="heroTextContainer">
                <h1>Fresh Bread Everyday</h1>
                <div className="btn">
                    <Link to="/Locations" className="button-link">find a bakery</Link>
                </div>
            </div>
        </div>
        
        <div id="homeGallery">
           <div id="contact">
                <h2>Contact</h2>
                <p>647-029-3354</p>
                <p>breadbakery@gmail.com</p>
                <div id="socials">
                    <Link to="https://www.facebook.com">
                        <img src="./src/assets/facebook-icon.svg" alt="" />
                    </Link>
                    <Link to="https://www.instagram.com">
                        <img src="./src/assets/instagram-icon.svg" alt="" />
                    </Link>
                    <Link to="https://twitter.com">
                        <img src="./src/assets/twitter-icon.svg" alt="" />
                    </Link>
                </div>
            </div> 
           <div>
                <img src="./src/assets/home-croissant.png" alt="Bread on brown wooden tray." />
                {/* https://unsplash.com/photos/bread-on-brown-wooden-tray-jfMCgNandXk */}
            </div> 
           <div>
                <img src="./src/assets/home-bakery.png" alt="Glass window looking into bakery." />
                {/* https://unsplash.com/photos/black-and-gray-metal-framed-glass-display-counter-3-PfUgbyWEs */}
            </div> 

        </div>
    </>
  );
}