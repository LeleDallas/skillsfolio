import { useEffect, useState } from "react";
import IconFont from "../components/iconfont";
import { birthday, email, fullName, location, role, socialListIcons } from "../utils";

const Aside = () => {
  const [over, setOver] = useState(-1);
  const [width, setWidth] = useState(0);

  const elementToggleFunc = function (elem: Element) {
    elem.classList.toggle("active");
  };

  const sidebarToggle = () => {
    const sidebar = document.querySelector("[data-sidebar]");
    if (sidebar) elementToggleFunc(sidebar);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="https://mdundo.com/media/articles/1599277727_4586_b.jpg"
            alt={fullName}
            style={{
              borderRadius: 30,
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            }}
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title={fullName}>
            {fullName}
          </h1>
          <p className="title">{role}</p>
        </div>

        <button onClick={sidebarToggle} className="info_more-btn">
          <span>Show Contacts</span>
          {width < 580 && <IconFont name="see" color={"#006df0"} />}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IconFont name="Mail" size={22} color="#006df0" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:emanuele.dallara99@gmail.com" className="contact-link">
                {email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IconFont name="riqi" size={22} color="#006df0" />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime={birthday}>{birthday}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IconFont name="dingwei" size={22} color="#006df0" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {socialListIcons.map((icon, index) => (
            <li key={icon.icon} className="social-item">
              <a href={icon.url} target="_blank" className="social-link">
                <IconFont
                  color={over === index ? "white" : "gray"}
                  name={icon.icon}
                  size={22}
                  onMouseOver={() => setOver(index)}
                  onMouseLeave={() => setOver(-1)}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
