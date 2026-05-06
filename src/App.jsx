import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Music, Brush, Search, Zap, Mail, Link, User, Info } from 'lucide-react';
import './App.css';

const INTERESTS = {
  frontal: {
    id: 'frontal',
    title: 'Lógica & Código',
    description: 'El motor de mi curiosidad. Me encanta resolver problemas complejos, arquitectar sistemas escalables y aprender nuevas tecnologías.',
    icon: <Code size={32} />,
    color: '#00d2ff'
  },
  parietal: {
    id: 'parietal',
    title: 'Creatividad & Diseño',
    description: 'Donde la forma encuentra la función. Disfruto creando interfaces intuitivas y explorando el lado estético de la tecnología.',
    icon: <Brush size={32} />,
    color: '#ff007a'
  },
  temporal: {
    id: 'temporal',
    title: 'Música & Idiomas',
    description: 'La comunicación en su estado más puro. Desde melodías hasta gramática, me fascina cómo nos conectamos.',
    icon: <Music size={32} />,
    color: '#a0fe00'
  },
  occipital: {
    id: 'occipital',
    title: 'Visión & Análisis',
    description: 'Procesamiento de datos y visión por computadora. Entender el mundo a través de patrones y representaciones visuales.',
    icon: <Search size={32} />,
    color: '#ffcc00'
  },
  cerebellum: {
    id: 'cerebellum',
    title: 'Hobby & Acción',
    description: 'Equilibrio y movimiento. Deportes, viajes y cualquier actividad que me saque de la silla y me mantenga activo.',
    icon: <Zap size={32} />,
    color: '#ff5e00'
  }
};

const BrainSVG = ({ activeLobe, onLobeClick }) => {
  return (
    <svg viewBox="0 0 400 300" className="brain-svg">
      {/* Frontal Lobe (Blue) - Moved 15px Up */}
      <motion.path
        d="M90,5 C40,5 -10,45 -10,115 C-10,165 30,185 80,185 C100,185 140,145 140,95 C140,35 110,5 90,5 Z"
        className={`brain-lobe ${activeLobe === 'frontal' ? 'active' : ''}`}
        style={{ color: INTERESTS.frontal.color }}
        onClick={() => onLobeClick('frontal')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />
      
      {/* Parietal Lobe (Purple) - Extended Down and Sideways */}
      <motion.path
        d="M120,-25 C180,-50 280,-50 340,0 C360,40 340,100 290,130 C270,140 200,140 160,110 C150,50 120,-25 120,-25 Z"
        className={`brain-lobe ${activeLobe === 'parietal' ? 'active' : ''}`}
        style={{ color: INTERESTS.parietal.color }}
        onClick={() => onLobeClick('parietal')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />
      
      {/* Occipital Lobe (Yellow) - Scaled Up */}
      <motion.path
        d="M320,20 C370,40 400,100 400,160 C400,200 360,220 310,220 C290,220 270,200 270,140 C320,120 340,40 320,20 Z"
        className={`brain-lobe ${activeLobe === 'occipital' ? 'active' : ''}`}
        style={{ color: INTERESTS.occipital.color }}
        onClick={() => onLobeClick('occipital')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />
      
      {/* Temporal Lobe (Green) - Scaled Up */}
      <motion.path
        d="M90,200 C110,230 180,260 240,240 C260,230 260,180 240,150 C200,160 150,170 130,150 C120,160 100,180 90,200 Z"
        className={`brain-lobe ${activeLobe === 'temporal' ? 'active' : ''}`}
        style={{ color: INTERESTS.temporal.color }}
        onClick={() => onLobeClick('temporal')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />
      
      {/* Cerebellum (Orange) - Moved 15px Up */}
      <motion.path
        d="M265,185 C275,225 265,255 240,265 C260,285 300,285 340,265 C365,255 365,225 315,195 C305,185 295,175 265,185 Z"
        className={`brain-lobe ${activeLobe === 'cerebellum' ? 'active' : ''}`}
        style={{ color: INTERESTS.cerebellum.color }}
        onClick={() => onLobeClick('cerebellum')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />
    </svg>
  );
};

function App() {
  const [activeLobe, setActiveLobe] = useState('frontal');

  const handleLobeClick = (id) => {
    setActiveLobe(id);
  };

  return (
    <div className="app-container">
      <div className="neural-bg">
        <div className="neural-network"></div>
      </div>

      <header className="title-container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Andre Goros
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="placeholder-tagline"
        >
          {/* El usuario llenará esto */}
        </motion.p>
      </header>

      <main className="brain-section">
        <div className="brain-container">
          <BrainSVG activeLobe={activeLobe} onLobeClick={handleLobeClick} />
        </div>
        
        <AnimatePresence mode="wait">
          {activeLobe && (
            <motion.div
              key={activeLobe}
              className={`info-panel ${activeLobe}`}
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="info-content">
                <div className="info-icon" style={{ color: INTERESTS[activeLobe].color }}>
                  {INTERESTS[activeLobe].icon}
                </div>
                <div className="info-text">
                  <h2>{INTERESTS[activeLobe].title}</h2>
                  <p>{INTERESTS[activeLobe].description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="social-links">
        <a href="https://github.com/andregoros" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
          <Link size={24} />
        </a>
        <a href="mailto:andre@example.com" className="social-link" title="Email">
          <Mail size={24} />
        </a>
        <a href="https://linkedin.com/in/andregoros" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <User size={24} />
        </a>
      </footer>
    </div>
  );
}

export default App;
