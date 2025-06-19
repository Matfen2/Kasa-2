import "./Home.scss";
import Banner from "../Banner/Banner";
import logements from "../../data/logements.json";
import bannerHome from "../../assets/banner-home.png";
import Card from "../Card/Card";

const Home = () => {
  return (
    <section id="home">
      {/* Bannière */}
      <Banner bgIMG={bannerHome} title="banner-home" text="Chez vous, partout et ailleurs" />

      {/* Liste de Logements */}
      <div className="list-logements">
        {logements.map((logement) => (
          <Card 
           id={logement.id}
           key={logement.id}
           cover={logement.cover}
           title={logement.title}
           />
        ))}
      </div>
    </section>
  )
}

export default Home
