// app.tsx
import React, { useState } from 'react';
import './App.css';
import { FaHtml5, FaCss3, FaReact, FaLinux } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { TbBrandPython, TbBrandTypescript } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";
import { GoSmiley } from "react-icons/go";
import { LiaWindows } from "react-icons/lia";

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <header className="Header">
        <h1>Gabriel Friedrich Borato</h1>
        <nav>
          <ul>
            <li><a href="https://github.com/GabrielBorato">Projetos</a></li>
            <li><a href="https://drive.google.com/file/d/1h98k-mgcDleJ8jtazfZv5sSq04SzcjDG/view?usp=drive_link">Currículo</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=5547992021098">Contato</a></li>
            <li><a href="mailto:gabrielfborato2009@hotmail.com">E-mail</a></li>
          </ul>
        </nav>
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
          <h2>Automation developer</h2>
        </section>
        <section id="projects" className="Section">
          <h2><TbBrandPython/><TbBrandTypescript/><FaHtml5/><FaCss3/><RiRobot2Line/><FaReact/><PiFileSql/><FaLinux/><LiaWindows /></h2>
        </section>
        <section id="experience" className="Section">
          <h2>Sobre mim </h2>
          <p>
            Olá e seja muito bem-vindo(a) ao meu portfólio! Aqui você encontrará um pouco sobre mim, um desenvolvedor Full-Stack dedicado a automações em Python, tanto em ambientes Windows quanto Linux <GoSmiley />.
            Neste portfólio, compartilho detalhes sobre minha experiência profissional, minhas habilidades técnicas e projetos relevantes que desenvolvi, além das minhas redes sociais para que possamos nos conectar. Se precisar de alguma informação adicional, estou à disposição!
          </p>
        </section>
        <section id="contact" className="Section">
        </section>
      </main>
      <footer className="Footer">
      </footer>
    </div>
  );
}

export default App;
