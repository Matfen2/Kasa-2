import "./Home.scss";
import Banner from "../Banner/Banner";
import bannerHome from "../../assets/banner-home.png";

const Home = () => {
  return (
    <section id="home">
      {/* Bannière */}
      <Banner bgIMG={bannerHome} title="banner-home" text="Chez vous, partout et ailleurs" />

      {/* Liste de Logements */}
      <div className="list-logements">

      </div>
    </section>
  )
}

export default Home
