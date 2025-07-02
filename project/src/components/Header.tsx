import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuItemClick = (section: string) => {
    onMenuClick(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between w-full">
            {/* Left Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium px-4 py-2 rounded-full hover:bg-gray-800"
              >
                Home
              </button>
              <button
                onClick={() => handleMenuItemClick('about')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium px-4 py-2 rounded-full hover:bg-gray-800"
              >
                About
              </button>
            </nav>

            {/* Right Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleMenuItemClick('projects')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium px-4 py-2 rounded-full hover:bg-gray-800"
              >
                Projects
              </button>
              <button
                onClick={() => handleMenuItemClick('certifications')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium px-4 py-2 rounded-full hover:bg-gray-800"
              >
                Certifications
              </button>
              <button
                onClick={() => handleMenuItemClick('contact')}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium px-4 py-2 rounded-full hover:bg-gray-800"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button (right aligned) */}
            <div className="md:hidden ml-auto">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 shadow-lg">
            <nav className="px-6 py-4 space-y-3">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => handleMenuItemClick('about')}
                className="block w-full text-left py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button
                onClick={() => handleMenuItemClick('projects')}
                className="block w-full text-left py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Projects
              </button>
              <button
                onClick={() => handleMenuItemClick('certifications')}
                className="block w-full text-left py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Certifications
              </button>
              <button
                onClick={() => handleMenuItemClick('contact')}
                className="block w-full text-left py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
