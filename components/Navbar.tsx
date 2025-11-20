import React, { useEffect, useState } from 'react';
import { CATEGORIES } from '../constants';

const Navbar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0]?.id || '');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveId(id);
    
    const element = document.getElementById(id);
    if (element) {
      // Offset for the sticky header + nav
      const navHeight = 120; // Approximation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Update hash
      window.history.pushState(null, '', `#${id}`);
    }
  };

  // Scroll spy to update active state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset to trigger earlier

      for (const category of CATEGORIES) {
        const element = document.getElementById(category.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveId(category.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-card p-2 shadow-md">
      <ul className="flex flex-wrap justify-center gap-2 p-0 m-0 list-none">
        {CATEGORIES.map((category) => (
          <li key={category.id}>
            <a
              href={`#${category.id}`}
              onClick={(e) => handleNavClick(e, category.id)}
              className={`
                block px-3 py-2 rounded-full text-sm sm:text-base font-bold transition-colors duration-300
                ${activeId === category.id 
                  ? 'bg-primary text-black' 
                  : 'text-white hover:bg-primary hover:text-black'}
              `}
            >
              {category.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;