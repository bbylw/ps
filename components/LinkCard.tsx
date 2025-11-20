import React from 'react';
import { LinkItem } from '../types';

interface LinkCardProps {
  item: LinkItem;
}

const LinkCard: React.FC<LinkCardProps> = ({ item }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center bg-card rounded-lg p-4 text-center transition-transform duration-200 ease-out min-h-[90px] hover:bg-[#2a2a2a] hover:-translate-y-[2px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] cursor-pointer overflow-hidden">
      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute top-0 left-0 w-full h-full z-20"
        aria-label={item.title}
      />
      <i className={`${item.iconClass} text-3xl mb-3 text-primary transition-transform duration-200 relative z-10 group-hover:scale-110`} />
      <h3 className="text-sm sm:text-base font-medium text-white leading-tight line-clamp-2 max-w-full px-1 relative z-10">
        {item.title}
      </h3>
    </div>
  );
};

export default LinkCard;