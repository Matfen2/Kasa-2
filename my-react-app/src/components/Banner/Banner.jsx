import "./Banner.scss";

const Banner = ({bgIMG, title, text}) => {
  return (
    <section id="banner">
      <img src={bgIMG} className="banner-img" alt={title} />
      <div className="banner-overlay"></div>
      <p>{text}</p>
    </section>
  )
}

export default Banner
