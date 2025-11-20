import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LinkCard from './components/LinkCard';
import { CATEGORIES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary selection:text-black">
      <header className="bg-black p-4 text-center border-b border-[#1a1a1a]">
        <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wider">
          WebNav Hub
        </h1>
      </header>

      <Navbar />

      <main className="max-w-[1200px] mx-auto p-4 sm:p-6">
        {CATEGORIES.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-24">
            <h2 className="text-2xl font-bold my-6 sm:my-8 text-primary border-l-4 border-primary pl-3 uppercase">
              {category.title}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-4 mb-8">
              {category.links.map((link, index) => (
                <LinkCard key={`${category.id}-${index}`} item={link} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default App;