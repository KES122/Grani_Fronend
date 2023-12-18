// HamburgerMenu.tsx

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './HamburgerMenu.scss';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuContent: React.FC = () => {
  return (
    <div className="menu-items">
      <button onClick={() => console.log('Button 1 clicked')}>Button 1</button>
      <button onClick={() => console.log('Button 2 clicked')}>Button 2</button>
      <button onClick={() => console.log('Button 3 clicked')}>Button 3</button>
    </div>
  );
};

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const menu = isOpen ? (
    <div className="hamburger-menu">
      <MenuContent />
    </div>
  ) : null;

  return (
    <div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {ReactDOM.createPortal(menu, document.body)}
    </div>
  );
};

export default HamburgerMenu;

