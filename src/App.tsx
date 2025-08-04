// app.tsx
import React, { useState } from 'react';
import './App.css';
import { FaHtml5, FaCss3, FaReact, FaLinux, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { TbBrandPython, TbBrandTypescript } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";
import { GoSmiley } from "react-icons/go";
import { LiaWindows } from "react-icons/lia";
import { MdEmail, MdPhone } from "react-icons/md";

function App() {
  const [theme, setTheme] = useState('light');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const technologies = [
    { icon: <TbBrandPython />, name: 'Python', color: '#3776AB' },
    { icon: <TbBrandTypescript />, name: 'TypeScript', color: '#3178C6' },
    { icon: <FaHtml5 />, name: 'HTML5', color: '#E34F26' },
    { icon: <FaCss3 />, name: 'CSS3', color: '#1572B6' },
    { icon: <RiRobot2Line />, name: 'Automação', color: '#FF6B35' },
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <PiFileSql />, name: 'SQL', color: '#336791' },
    { icon: <FaLinux />, name: 'Linux', color: '#FCC624' },
    { icon: <LiaWindows />, name: 'Windows', color: '#0078D4' }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/GabrielBorato', name: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/gabriel-borato', name: 'LinkedIn' },
    { icon: <MdEmail />, url: 'mailto:gabrielfborato2009@hotmail.com', name: 'Email' },
    { icon: <MdPhone />, url: 'https://api.whatsapp.com/send?phone=5547992021098', name: 'WhatsApp' }
  ];

  return (
    <div className={`App ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <header className="Header">
        <h1>Gabriel Friedrich Borato</h1>
        <div className="ThemeToggle">
          <label className={`ThemeButton ${theme === 'light' ? 'selected' : ''}`}>
            <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} />
            <div className="Indicator"></div>
            Light
          </label>
          <label className={`ThemeButton ${theme === 'dark' ? 'selected' : ''}`}>
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
            <div className="Indicator"></div>
            Dark
          </label>
        </div>
      </header>
      
      <main>
        <section id="about" className="Section">
          <h2>Full-Stack Developer</h2>
        </section>
        
        <section id="projects" className="Section">
          <h2>
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="tech-icon"
                style={{ color: tech.color }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                title={tech.name}
              >
                {tech.icon}
                {hoveredTech === tech.name && (
                  <div className="tooltip">{tech.name}</div>
                )}
              </span>
            ))}
          </h2>
        </section>
        
        <section id="experience" className="Section">
          <h2>Sobre mim</h2>
          <p>
            Olá e seja muito bem-vindo(a) ao meu portfólio! Aqui você encontrará um pouco sobre mim, um desenvolvedor Full-Stack dedicado, tanto em ambientes Windows quanto Linux.
            <br /><br />
            &nbsp;Neste portfólio, compartilho detalhes sobre minha experiência profissional, minhas habilidades técnicas e projetos relevantes que desenvolvi, além das minhas redes sociais para que possamos nos conectar. Se precisar de alguma informação adicional, estou à disposição!
          </p>
        </section>
        
        <section id="contact" className="Section">
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </section>
      </main>
      
      <footer className="Footer">
        <p>&copy; 2025 Gabriel Borato. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
