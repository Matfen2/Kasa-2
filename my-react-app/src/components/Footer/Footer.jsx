import "./Footer.scss";
import logoFooter from "../../assets/logo_footer.png";

const Footer = () => {
  return (
    <footer>
      <img src={logoFooter} className="logo-footer" alt="logo-footer" />
      <p className="copy">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
