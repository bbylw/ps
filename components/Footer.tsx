import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-[#ccc] text-center p-4 text-xs sm:text-sm mt-8">
      <p>© 2025 WebNav Hub. 保留所有权利。</p>
      <nav className="mt-2 flex justify-center gap-4">
        <a href="#" className="text-[#ccc] hover:text-white transition-colors">隐私政策</a>
        <a href="#" className="text-[#ccc] hover:text-white transition-colors">使用条款</a>
        <a href="#" className="text-[#ccc] hover:text-white transition-colors">联系我们</a>
      </nav>
    </footer>
  );
};

export default Footer;