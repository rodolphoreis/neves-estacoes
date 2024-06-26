import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./header.css";

const header = () => {
  const [classOn, setClassOn] = useState(false);

  return (
    <header>
      <div className="header_container">
        <div className="logo">
          <img src="/logo.png" alt="Logomarca" />
        </div>

        <div
          className={classOn ? "menu-section on" : "menu-section"}
          onClick={() => setClassOn(!classOn)}
        >
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>

          <nav>
            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#qualidade">Qualidade</a>
              </li>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#contatos">Contatos</a>
              </li>

              <li>
                <a
                  className="whatsapp-link"
                  href="https://web.whatsapp.com/send?phone=5522999345158"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Send message via WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default header;
