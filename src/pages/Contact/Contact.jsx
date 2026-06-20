import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import profile from "../../data/profile";
import "./Contact.css";

const contactMethods = [
  {
    icon: <FaEnvelope />,
    title: "Primary Email",
    value: "reza.kermanian99@gmail.com",
    link: "mailto:reza.kermanian99@gmail.com",
  },
  {
    icon: <FaEnvelope />,
    title: "Secondary Email",
    value: "reza.kermanian1378@gmail.com",
    link: "mailto:reza.kermanian1378@gmail.com",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/rezakermanian78",
    link: "https://github.com/rezakermanian78",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/reza-kermanian-b5612034b",
    link: "https://www.linkedin.com/in/reza-kermanian-b5612034b/",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "+98 933 007 7697",
    link: "https://wa.me/989330077697",
  },
];

function Contact() {
  return (
    <section className="contact-page section">
      <div className="container">
        <span className="section-kicker">Contact</span>

        <h1 className="section-title">
          Let’s build <span className="gradient-text">remarkable digital systems</span>
        </h1>

        <p className="contact-intro">
          Connect with me for AI-driven applications, scalable backend systems,
          modern web platforms, research collaboration, trading technologies, or
          international freelance opportunities.
        </p>

        <div className="contact-layout">
          <div className="contact-info-box">
            <h2>{profile.name}</h2>
            <p>{profile.title}</p>
            <span>{profile.location}</span>
          </div>

          <div className="contact-methods">
            {contactMethods.map((item) => (
              <a
                className="contact-card"
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={item.title}
              >
                <div className="contact-icon">{item.icon}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;