import "./footer.css";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const email = "eveelynpsouza@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="footer_container">
      <div className="footer_box">
        <div className="footer_logo">
          <img src="/logo.png" alt="Logomarca" />
        </div>
        <div className="footer_contacts">
          <div className="contact_item">
            <a
              href="https://www.instagram.com/neves.estacoes?igsh=b3pwbGlwNnRnbnQ="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.instagram.com/neves.estacoes?igsh=b3pwbGlwNnRnbnQ="
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
          <div className="contact_item email" onClick={handleEmailClick}>
            <FaEnvelope />
          </div>
          <div className="contact_item">
            <a
              href="https://web.whatsapp.com/send?phone=5522999345158"
              target="_blank"
              rel="noopener noreferrer"
              className="zap_icon"
              title="Send message via WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
