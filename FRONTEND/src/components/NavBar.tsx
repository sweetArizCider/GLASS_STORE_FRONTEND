// Svgs
import whatsappSvg from "../assets/img/index/whatsapp.svg";
import facebookSvg from "../assets/img/index/facebook.svg";
import instagramSvg from "../assets/img/index/instagram.svg";
import glassStoreLogo from "../assets/img/index/GLASS.png";
import searchSvg from "../assets/img/index/search.svg";
import favoritesSvg from "../assets/img/index/favorites.svg";
import cotizacionesSvg from "../assets/img/index/clip.svg";
import userSvg from "../assets/img/index/user.svg";
// Config
import { SocialMedia } from "../assets/config/config.json";
// Styles
import "../styles/navBar.css";

function NavBar() {
  return (
    <section id="navBar">
      <article className="navIcons">
        <a href={SocialMedia.whatsapp} target="_blank" className="anchorIcon">
          <img src={whatsappSvg} alt="WhatsApp" className="svg" />
        </a>
        <a href={SocialMedia.facebook} target="_blank" className="anchorIcon">
          <img src={facebookSvg} alt="Facebook" className="svg" />
        </a>
        <a href={SocialMedia.instagram} target="_blank" className="anchorIcon">
          <img src={instagramSvg} alt="Instagram" className="svg" />
        </a>
      </article>
      <figure className="logo">
        <img src={glassStoreLogo} alt="GlassStoreLogo" />
      </figure>
      <article className="navIcons">
        <a className="anchorIcon" href="#">
          <img src={searchSvg} alt="Buscar Productos" className="svgOptions" />
        </a>
        <img src={favoritesSvg} alt="Favoritos" className="svgOptions" />
        <img src={cotizacionesSvg} alt="Cotizaciones" className="svgOptions" />
        <img src={userSvg} alt="Usuarios" className="svgOptions" />
      </article>
    </section>
  );
}

export default NavBar;
