import Nav from "./Nav";

export default function Header() {
    return(
      <header>
        <div className="contentWrapper">
            <div id="headerContent">
                <h2 id="site-name"><a href="/">Bread Bakery</a></h2>
                <Nav />
            </div>
        </div>
      </header>
    );
  }