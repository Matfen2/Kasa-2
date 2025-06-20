import "./Banner.scss";

const Banner = ({bgIMG, title, text, opacity}) => {
  return (
    <section id="banner">
      <img src={bgIMG} className="banner-img" alt={title} />
      <div className="banner-overlay" style={{opacity}}></div>
      <p>{text}</p>
    </section>
  )
}

export default Banner
